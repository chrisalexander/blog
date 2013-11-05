---
layout: post
heading: 'Android: Fragments within Fragments'
categories: dev
---

I've been playing with Android app development this weekend, as a bit of fun. It's been a while since I did it so I jumped in with all the new stuff to see what was what.

Fragments is something I largely ignored last time, as it was available for Honeycomb and I only had 2.x devices. Now I've got the phone and tablet running 4.1.1 I thought it was time to have a go. Additionally, the app I'm building has some quite complex UI so fragments was basically a requirement reading the docs.

I was building out the settings stuff first (the app needs credentials to work so I kinda had to start there), which was relatively easy. I wanted to create a setup flow, whereby when you start the app it checks if you have credentials that are valid and if not walks through the setup procedure. I was using fragments to do this, each setup page being a different fragment rendered within the whole window in the main activity.

Upon realising that I had already built a PreferenceFragment for the config settings a user had to setup at the beginning (they were easy to logically group this way) I thought I would just include that in one of the setup flow fragments and my config options would be all set up themselves. This worked rather nicely, until I got a rather nasty exception when I ran through the flow for a second time:

I had a Google and was surprised to find endless Stack Overflow posts saying "Fragments in fragments can't be done". Well I may be new to this version of Android development but that seemed a little foolish and also acted like a red flag to a bull. So I had a hunt around and it turns out it *is *possible to do fragments within fragments, but you just have to clean up after yourself - activities only clean up the top level fragments in them when they are closed or transitioned etc.

Thus I had a half hour of playing around trying to find the right settings, and this is the code I came up with. It goes in the onDestroy method of the middle fragment, i.e. the one that is within the activity and has another fragment within it. Note that you need to know the ID of the inner fragment for this to work.

Some explanation: first load up the inner fragment by its ID, in this case R.id.innerfragment. Make sure this is right or you will kill the wrong thing! Next, check if it is resumed. If you don't do this check, you will try and kill a previously killed fragment, which will barf out even worse than the problem we're trying to solve, and a little more unpredictably at that. Finally if you have a fragment that is not removed, use the fragment manager to construct a transaction to remove it. At the end you continue the stack's destroy method call.

Turned out to be rather a few lines of code in the end to accomplish something pretty awesome, which should be possible anyway.