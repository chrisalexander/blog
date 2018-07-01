---
layout: post
heading: This is also the web platform
subheading: Client features are only half the story
---

A couple of weeks ago now, [Paul Kinlan](https://plus.google.com/+PaulKinlan) wrote [this very good piece](https://paul.kinlan.me/this-is-the-web-platform/) entitled "This is the web platform".

If you're not familiar with his recent work and you're a web developer, I strongly recommend you go and check out [iwanttouse.com](http://iwanttouse.com/). It's like [caniuse.com](http://caniuse.com/) but kind of inverted - given a set of browser features, it will tell you how much of the total web audience you can reach. It makes it much easier to figure out whether a specific feature you would like to use correlates with your requirements around browser support.

In summary, Paul's web platform blog post does a really great job of highlighting the minefield that is browser support for modern web features in a way that makes it easier to navigate. It also raises some issues with how we move forward on this front in terms of improving adoption and support for this exciting new client technology.

I would like to propose an addition to Paul's comments regarding web browsers, which while comprehensive from a client implementation perspective, omit (for me, at least) one of the key concepts about building for the web. And that is the web is nothing without APIs.

Allow me to elaborate.

## The role of APIs

The glorious concept of the web was begun, as we all discussed recently with the [Web at 25](http://www.webat25.org/), with the concept of linking content together. This is the enormous advantage that the web has over other such systems in that it provides an open, collaborative, and contributor-friendly place where anyone can add and link to (and in some cases, edit) other people's work.

I have never tried to write an application for Paul's web platform (i.e. something that runs in a web browser) that does not use any form of communication with the web other than to load the HTML, CSS, JS and whatever else is required to run the application itself. I can't help thinking that this is because there is not really a use case there.

Sure it is possible to build Chrome packaged apps that run on "web platform client technology" (for want of a catchier name for it) but do without web communication (such as text file editors, file managers, perhaps basic photo editing) and Firefox OS apps, to name a couple of examples. But they are built on the "web platform client technology" out of necessity - Chrome OS only runs browser-based apps, and you still need to manage your files.

Building compelling webapps means pulling in resources from one or more locations, sharing them out to one or more locations, and making magic happen in the middle.

So this is why I would like APIs embodied in the concept of the web platform. For without them, much like these long list of client features, you would not be able to build compelling, useful, and beautiful web platform experiences.

## Excellent APIs

Allow me to provide one more concrete example. Over the Christmas break and into the New Year I worked on a web application to do with news recommendation. It was essentially a PoC for the [data retrieval APIs](http://import.io/data/integrate) we have at work.

I could have built an authentication system, and a database, and an API to store user preferences, likes, reading stats etc. (like most people using Ruby on Rails seem to spend their weekends at hackathons doing).

Instead, I integrated the [Google+ Signin API](https://developers.google.com/+/features/sign-in), the [Google Fusion Tables API](https://developers.google.com/fusiontables/) and [Google Drive's AppData](https://developers.google.com/drive/web/appdata) capabilities. This gave me all of the funcionality I needed in order to have user accounts, list recommendations and query them, and store user data respectively.

In short, I was able to combine Google's API platform, with the partial web platform that Paul so eloquently earlier described, in order to build a fully functioning webapp. I didn't even need to host the static content (HTML, JS, CSS) myself - Github Pages takes care of that! So I have a fully functioning webapp, user accounts, preference and stats persistance and all, with zero costs and zero servers.

That, I propose, is the web platform.
