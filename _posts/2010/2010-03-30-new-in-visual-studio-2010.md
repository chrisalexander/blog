---
layout: post
heading: 'New in Visual Studio 2010'
categories: dev
---

I was recently at an all-day event with Scott Guthrie from Microsoft - [read about the event here](/on-engineering/dev/notes-from-the-guathon/). Here I collect what he had to say about what's new in Visual Studio 2010, which is launching very soon. It's going to be a quick run-down of some new features, and hopefully I will be able to dive into deeper demos in other posts.

<!-- Replace missing image from http://media.chris-alexander.co.uk/wp-content/uploads/2009/11/logo1.jpg -->

### JavaScript Intellisense

Scott demoed Intellisense, Visual Studio's intelligent code-completion assistant, fully functioning with JavaScript code in the IDE.

JavaScript is a weakly-typed language, making Intellisense more difficult to implement for it than in other languages such as the strongly-typed C#. However, by interpreting the script in the IDE and using reflection on the variables, the IDE is able to provide advanced Intellisense, including object and type detection. Very impressive.

### Navigate To

Hitting Ctrl+, (comma) in Visual Studio 2010 brings up the new Navigate To feature. This allows fast, real-time search across the entire codebase, including object, method, namespace and property names - extremely powerful!

In addition to this, it supports PascalCaseSearch - so just type "PCS" and it will bring up names cased in that way, for example "**P**ascal**C**ase**S**earch" - so fewer keystrokes for you too.

### View Call Hierarchy

There's nothing worse than making a change to a method and finding out down the line that you have introduced a bug because you didn't know that particular method was used somewhere.

Now, with View Call Hierarchy, you can see the call stack for all the places a particular method is called from. It even has the ability to cope with virtual methods and overrides. Super-useful!

### Generate Sequence Diagram and Generate Dependency Graph

Tied yourself in knots? Then allow Visual Studio 2010 to Generate Sequence Diagram.

This takes the general structure of your code, and puts it into a diagram so you can see exactly how all your classes and methods interact.

Dependency Graph works in a similar way, helping out like View Call Hierarchy - showing you where your code depends on other parts and where coupling could become a problem.

### Intellitrace

This is one of my favourite features, just for the number of times I've found myself thinking, "Wow, I could use Intellitrace right now" while building applications since I first heard about it.

Intellitrace is the black box flight recorder of the software development world. It records all actions and states of a software application while it's in use, then when an error occurs, you can send the Intellitrace off to the developer (it is supported in Team Foundation Server) so they can debug the situation.

It provides the developer with the exact state of the application when it failed - this way you can simply step back and forwards (forward stepping is also a new feature in the debugger) through the application to see why it failed and fix the bug. So awesome.

### More to come

That's just a few of the new features in Visual Studio 2010 - it is a pretty major upgrade and overhaul!

Look out for more as release day approaches.