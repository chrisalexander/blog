---
layout: post
heading: 'Solving expensive validation'
categories: code
---

We have been having a short interesting discussion on handling the type of code that you see here, something reasonably common in systems with processing systems which require some up-front checking:

{% gist 07618c6c461cc1312174f24e9772630c %}

I think this is reasonably common, especially in older code, and will usually be OK. If you have developers who know the processor well or have used this code before, you will probably get `CanProcess` called before `Process`.

But what if you have new clients, potentially externally, using this code? Add into this scenario that you may be calling the processing a lot, or that the validation phase may be relatively expensive in relation to the processing, and you have issues.

For example, a new user may simply not call the validation:

{% gist 4cd22fb574ebfa8cb90e807a18ae12fa %}

In this case you need to ensure the `Process` method also executes the same logic as `CanProcess`. Easy enough - but what if this then happens, potentially thousands of times a second?

{% gist 82fa9af2de1b586b2025c3602d52e2e0 %}

An alternative implementation may be to skip the validation phase entirely and just have some kind of `TryProcess` concept:

{% gist ca0c4cdf837d83a0b09338dce341111b %}

However this leaves you with a few issues. You can no longer separate the "check this input is OK" phase with "we actually want to do the work", which may not make life all that easy for your users.

Then, in the implementation, unless you throw exceptions, you struggle to figure out why the validation failed - which will also cause problems for user feedback.

{% gist 527d37745037d8095357c036411bd46a %}

One interesting idea we came up with was performing the validation and then returning a lambda which can be invoked when the validation passes and the user is ready to proceed.

{% gist d7924e342b46a3c70d2157cca4eb6fc4 %}

Then, to invoke, you check whether an action is returned, prompt the user, and then invoke the action to perform the processing:

{% gist 0dca010291c88f849b9117495b19dbd9 %}

A potentially slightly cleaner approach would be to return a bool from the `CanProcess` method then use an out variable to store the action:

{% gist 599feefee0c6e2519eaed42f61508b00 %}

This approach still suffers from validation problems, relying on exceptions in the initial validation. A potential implementation would look something along these lines:

{% gist 0cefb5d651c92db8b1f94f68d8ea8844 %}

There is another major problem. As this is C#, your `DomainObject` could be anything - including something that you could mutate on that reference somewhere between calling the validator and invoking the returned action.

There is something we can do about this though - F# objects are immutable by default, so don't suffer from this. Additionally, you can accompish the whole thing in less code than just the interface definitions in C# :-)

So given an arbitrary validation and execution functions (here just noddy implementations) internal to your project you can then write a validation function such:

{% gist 3e0cb6ba807e95d48c1cad792b5fa28c %}

The overall function does a match on the result of the validation; if it succeeds, it returns a lambda / anonymous function to invoke the work to execute the job. This is in the form of an Option, which is native null checking but a bit nicer than in C#.

To use the code, you would call the validator, storing the result, then do a match on that option type and invoke the execution lambda if available:

{% gist 611527d8a4b24e4d25f45e0cf4fdcbcc %}