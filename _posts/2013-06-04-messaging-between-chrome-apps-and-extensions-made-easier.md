---
layout: post
heading: 'Messaging between Chrome apps and extensions made easier'
categories: google
---

A little while ago I was working on a Chrome app which needed an extension to go with it. Chrome has APIs for messaging between extensions but they're pretty bare-bones.

To solve this I made [comms.chrome.js](https://github.com/chrisalexander/comms.chrome.js). It is a library that makes it easier for two Chrome apps to communicate. It's not that advanced but it has some features that improve on what Chrome has to offer, such as the chaining of responses backwards and forwards.

Check out the code on Github: [https://github.com/chrisalexander/comms.chrome.js](https://github.com/chrisalexander/comms.chrome.js)