---
layout: post
heading: 'A Webserver in 50 lines of code'
categories: dev
---

I've been playing with python over the past few days, and have grown quite attached to it.

A number of features, such as ranges and the separation of lists and dictionaries, have endeared the language and it makes a lot of sense.

I thought I would have a bit of fun with it, and see how hard it was to write a web server. This may seem like a big step, but when you consider that reading from a URL is as simple as reading from a file in python, it is not a daunting task.

I managed to find a tutorial online, and after a bit of tinkering I got out a web server that responds to HTTP GET requests and serves files (not dynamically!) in just 50 lines of code (including my somewhat liberal whitespace - this indentation thing is taking a bit of getting used to).

Here's my server in 50 lines of code:
