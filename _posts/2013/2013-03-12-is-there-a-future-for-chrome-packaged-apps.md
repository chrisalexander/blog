---
layout: post
heading: 'Is there a future for Chrome packaged apps?'
categories: dev
---

Since I got my [Chromebook](https://web.archive.org/web/20170224015057/http://www.google.co.uk/intl/en/chrome/devices/landing-acer.html) (which I **adore**, by the way) I have been working on a few little coding projects for Chrome. Thanks to some early tomfoolery with their Packaged Apps examples, I have been able to develop the packaged apps on the Chromebook itself.

<!-- Replace missing image from http://media.chris-alexander.co.uk/wp-content/uploads/2013/03/acer-300x212.jpg -->

There are a couple of problems with this. The less serious is that the files app on Chrome OS still leaves a little bit to be desired - it looks like its model of the filesystem is updated asynchronously, and sometimes it just can't keep up with basic file actions.

The worst part of this, and leading on to the second point, is that there are no APIs you can use to replace the files app yourself. Chrome's APIs support loading and writing to specific files, but there is no capability of listing or automatically opening or saving to files outside the application's filesystem sandbox.

Additionally, up until Chrome 24 (the last major version), you could use [Web Intents](https://web.archive.org/web/20170110052024/http://webintents.org/) to link apps to opening particular file types. Now that has been deprecated and no longer available, Packaged Apps cannot register this behaviour. Oddly enough, Extensions have this functionality - but this has been disabled for Packaged Apps.

Google's Chrome team is obviously excellent - they consistently pump out good features and reasonable stability. However, if Packaged Apps are now the only option for deploying client-side (except Extensions which have only limited interactivity within the browser) then they are going to have to sharpen up on their API support - Chrome 25 is now essentially a crippled version without the file handling behaviour included at all.

And one final thing to add to my wish list for Chrome OS - please allow developers to distribute packaged apps as separate binary files. For example, we could build a Chrome Packaged App that can then be compiled (with developer tools) to work on Chrome OS (probably using the normal approach) but also to be a Windows binary, an OS X application bundle, and a Linux executable. Personally I don't see that being far off achievable.
