---
layout: post
heading: 'Using Knockout in Chrome Apps'
categories: google
---

[Knockout](http://knockoutjs.com/) is probably my favourite JavaScript library. It saves me a huge amount of time in virtually every project I do, and is a perfect blend of flexibility and size.

<!-- Replace missing image from http://media.chris-alexander.co.uk/wp-content/uploads/2013/03/ko-logo-300x87.png -->

I also love building Chrome Apps. Since I've got the Chromebook, even more so. However, security restrictions prevent the execution of the JavaScript eval() function, which prohibits Knockout from functioning in its default state.

Fortunately, you can provide your own custom bindings provider for Knockout, which mean you can work around this. One of the guys at work built one of these to improve efficiency in our client app, and helpfully we can do the same to enable Knockout support in Chrome Apps.

Well, that, or we can get someone else to do it for us. Ryan Niemeyer from Adobe has [kindly done it for us already](http://www.adobe.com/devnet/html5/articles/getting-started-with-knockoutjs.html). You can grab his code [from Github](https://github.com/rniemeyer/knockout-classBindingProvider), and be on your way to using Knockout in your Chrome App in no time.