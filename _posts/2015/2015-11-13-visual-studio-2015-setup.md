---
layout: post
heading: 'VS 2015 setup'
categories: code
---

Now that I have had a bit of a chance to explore Visual Studio 2015, I have been through and made a note of all of the configs I have changed to get it working how I would like.

It has a really cool feature called "[light bulbs](https://msdn.microsoft.com/en-us/library/dn872466.aspx)", which are like what Resharper gives you. They feel a bit more performant than their Resharper equivalents in VS 2013 but maybe that is just me. When there is a recommendation, the Ctrl + . shortcut is your friend, to bring it up, kind of like Alt + Enter in Resharper land.

Anyway, as I am mostly working with C# at the moment, these are the changes that I have made so far.

## Sort out "this" qualifier

By default, it recommends removing the "this." prefix when accessing local members:

{% include images/block.html src="http://media.chris-alexander.co.uk/pictures/vs2015/this.png" %}

You can switch this around in Tools -> Options -> Text Editor -> C# -> Code Style and checking "Qualify member access with 'this.'". You can look at the other three options in there while you are at it, all of them seem sensible to me turned on (the default).

## Turn on line numbers

Tools -> Options -> Text Editor -> C# -> General -> Settings -> Line numbers checkbox

## Organise usings

I turned on placing System directives before others, but this is a bit more contentious.

Tools -> Options -> Text Editor -> C# -> Advanced -> Organize Usings

## Scroll bars

Disable the horizontal scrollbar (a bit contentious): Tools -> Options -> Text Editor -> C# -> Scroll Bars -> Uncheck the first box, "Show horizontal scroll bar".

While I was in here I found you can turn on "map mode" for scroll bars, in the same pane under "Behaviour". This is a Sublime Text-like map that appears on the right of your code file so you can use it to navigate the file:

{% include images/block.html src="http://media.chris-alexander.co.uk/pictures/vs2015/map.png" %}

This is *awesome*.

But it gets better! Just hover over the bar and it shows you a code preview:

{% include images/block.html src="http://media.chris-alexander.co.uk/pictures/vs2015/hover.png" %}

This is probably going to change my life :-)