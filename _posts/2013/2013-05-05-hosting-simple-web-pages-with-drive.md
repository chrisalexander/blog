---
layout: post
heading: 'Hosting simple web pages with Drive'
categories: google
---

I have been hacking together a quick web app this weekend (yay bank holiday) and I wanted to host it somewhere to try it out.

As I am working on a Chromebook (done all the development for the app on the chromebook so far) I didn't really want to have to go and find a computer to FTP the files on to my server.

Instead I found out through [this useful guide](http://web.archive.org/web/20130724173813/https://googledrive.com/host/0B716ywBKT84AMXBENXlnYmJISlE/GoogleDriveHosting.html) that you can actually host static content directly from Google Drive.

Simply:

* Upload your content to Drive. This is copy+paste on a Chromebook
* Set the entire folder so that the public can view it
* Open your HTML file and click "Preview"
* This is the URL to your app that anyone can access

A few notes / caveats with this method:

* So far as I am aware you can't do any server functionality - but it is possible to do client side JS etc.
* It is served by HTTPS, if you are loading fonts or JS remotely then make sure it uses HTTPS too or most browsers will not load it.
* I have yet to find a way to alias some kind of URL or domain name to it, to make it less ugly, short of using the Google Short Links service which is available with Google Apps.

Nonetheless a pretty useful process.
