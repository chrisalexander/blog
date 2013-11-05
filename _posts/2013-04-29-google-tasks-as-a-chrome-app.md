---
layout: post
heading: 'Google Tasks as a Chrome app'
categories: google
---

Google Tasks is pretty cool - well integrated with Gmail and a good notepad for things to do.

However, I've always had problems with it because I quite like working on the Chromebook when I can, and getting to the tasks can take a while with loads of tabs and windows.

So this afternoon I bashed together [TaskApp](https://chrome.google.com/webstore/detail/taskapp/pfhffbadldacimplopjdegdjcnmdfpom?hl=en). The basic idea is it packages your Google Tasks into a Chrome app so it gets its own window.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/04/screenshot-300x187.jpg" %}

Having looked at the source code for the official [Google Tasks Chrome Extension](https://chrome.google.com/webstore/detail/google-tasks-by-google/dmglolhoplikcoamfgjgammjbgchgjdd), available [on Google Code](https://code.google.com/p/google-tasks-chrome-extension), and when it renders stuff it basically cheats and dumps an iFrame which contains the iGoogle version of the Tasks app.

So that's basically what I did with this app. With the exception that it uses the [new(-ish) &lt;webview&gt; tag](http://developer.chrome.com/dev/apps/webview_tag.html) (which, by the way, is AWESOME) so I don't have to worry about any OAuth stuff. It simply uses redirect listeners to work out whether you are logged in, and if not it launches a new window where you can do so. Then, when you have logged in, it opens the smaller window again.

Simple (only about 30 lines of JS all told) and pretty effective - I've quite enjoyed using it already this afternoon.