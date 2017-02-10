---
layout: post
heading: 'Expanding Enums'
subheading: 'Improving enum behaviour with extensions'
categories: code
---

I have recently been working in a system which uses an enum to describe changes made to a model, and then different behaviours are enacted throughout the code based on what these enum values are set to.

So you might have an example enum like this:

{% gist 25781483965b52a5a193a53db333fd80 %}

And then some code that looks like this:

{% gist 830408ebc611d76828b1f7f56d3a9f1d %}

So you're doing some filtering based on the enum criteria.

Now this is all well and good, but say you are in a codebase that is rapidly evolving, and you are changing your enum.

Removing fields is easy to detect - your code won't compile in that scenario, if you have missed a usage of the value. However, if you have added an enum value and haven't taken account of all of the locations it is used, you could end up with incorrect behaviour.

Say for example we expanded our example enum to include some more modes:

{% gist cb334ec35b3b95fe86dad40eb4175567 %}

Our earlier code then may not work, because the new *OperatorMode.Sysadmin* may have the same rights as *OperatorMode.Admin* and thus you end up where a sysadmin can't do what they should be able to.

Of course you could change the code:

{% gist b597c9062195d882521407c097d557aa %}

This would then need changing in all of the correct places.

What if instead we were to encode the rights the enum value in an easier to read format?

The proposal is to use an extension method on the enum type to encode whether the enum value confers specific rights or not. If you then put all these extensions in the same class, there is only one place in your code you need to check to ensure that you update all the right logic.

Thus based on our earlier use case you would end up with this:

{% gist 5dcc954095ff533276db0e6aa2ea96dd %}

You could then easily envisage your extension class turning into something more like this, and all of your enum comparisons handled in the extensions rather than in the code:

{% gist 629c18e73f1e7b20f5c405195d19ccba %}

Of course this requires some discipline to maintain, but should be worth it once you avoid your first few shunts in a rapidly evolving system!