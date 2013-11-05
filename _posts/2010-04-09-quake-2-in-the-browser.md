---
layout: post
heading: 'Quake 2 in the browser'
categories: software
---

A few days ago, I was at a Google-organised event in London talking about open source technologies and how they form the foundation of various projects.

I was [first last week to break news](http://twitter.com/Chris_Alexander/status/11438810284) of Quake 2 running inside Google Chrome, which was demoed at the event - awesome!

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/chrome5.png" %}

The Googlers took the Java port of Quake 2, ran it through a translator to translate it to JavaScript, then sat it on top of some of the cool new web technologies that are available in the bleeding-edge Chrome and Webkit builds. It uses Canvas, HTML 5 audio, local storage, web sockets, hardware acceleration and just about every cool bit of the HTML 5 set of technologies that I can think of to pull the experience off.

It's not all fun and games, though - to run it, you need the latest Chrome build, a fairly decent computer, and to run Chrome with some startup flags that do things like disable the sandboxing in the browser - something you wouldn't want to do then run a normal webpage (this is to permit the hardware acceleration to work). But other than that, it's pretty fun and an awesome demonstration of what will soon be possible in standard web browsers!

The project's homepage [is on Google Code](http://code.google.com/p/quake2-gwt-port/), and check out the video below!

<span class="youtube"><iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/fyfu4OwjUEI?wmode=transparent&amp;fs=1&amp;hl=en&amp;modestbranding=1&amp;iv_load_policy=3&amp;showsearch=0&amp;rel=0&amp;theme=dark&amp;hd=1" frameborder="0" allowfullscreen=""></iframe></span>