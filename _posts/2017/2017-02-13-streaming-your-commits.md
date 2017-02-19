---
layout: post
heading: 'Stream your code'
subheading: 'What if every commit had a screencast?'
categories: process
accent: a4f1ff
---

The other day we were having an interesting discussion about handover, and how you might most efficiently go about transferring knowledge about parts of code to someone else.

Yes yes yes - you shouldn't get in this situation, agile, communication, microservices and so on - but sometimes you do end up here, for reasons not of your own doing, and while lamenting your situation is one way of dealing with it, finding an efficient way out of it is probably better.

So how do you best get the developer's intention when you are reading through a bit of code? Well you can obviously look at the code and the comments it contains - that's a good place to start. You can also look through the history of that part of code - for Git you may have lots of small commits which tell you a fairly high resolution timeline; or you might have something more akin to TFS where you have bigger chunks of changes going in together linked to user stories or bugs with a lot of description with them.

But you will rarely ever tell exactly what the developer was thinking when they were conceiving the code, how they got it to where it is now, and perhaps even what pitfalls they found and avoided along the way.

It has also become apparent in the past few months to a year that watching people code over the internet (much like you would, apparently, watch someone else play video games) is "a thing" and that it is quite popular. Twitch has its [own category for it](https://www.twitch.tv/directory/game/Creative/programming).

So what if you were to combine these concepts? What if each commit you pushed actually came with a link to a video, stored somewhere like Twitch for open source projects, or on some server somewhere if it's internal, that shows not just what the developer ended up with, but also how they actually got there? Not just the code they typed in and then deleted, refactored and tweaked to make the final product, but all the mis-steps and mistakes and commentary that goes along with that as well?

If you can't do video, you could do a half-way house where you record the stream of changes made to a file, much like a multitude of micro git commits, and then some kind of timeline mechanism where you can jump forwards and backwards through the code seeing the code state, when the developer did builds or ran the tests, and generally get a bit more information on how they were actually progressing?

While these approaches might not be suitable for every single commit, when you do find a gnarly bug and have to dig into a complex algorithm, it may really help out to be able to see what the developer was up to at each character they changed.