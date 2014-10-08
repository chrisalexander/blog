---
layout: post
heading: 'Refucktoring: My Take'
categories: dev
---

Last week at the Software Craftsmanship 2010 conference held at Bletchley Park, I attended an excellent session on "Refucktoring", which may be defined as below:

As a project goes on, developers become increasingly expendable. Refucktoring is like job security for developers. By making the code function the same but in as complex a way as possible, it is easier to keep your job as only you can maintain the code.

As Software Craftsmanship is a hands-on conference with attendees taking part in the presentations by writing code, we were all encouraged to write our own "Refucktorings".

The application simply has to output "Hello, World" to the console. Simple right? Sure. So build that as simply as possible, stick a test around it, and then your Refucktoring may commence.

I have open-sourced my PHP-based attempt at making it as complex as feasibly possible to maintain. It includes some nice functionality such as hitting a REST API for converting numeric ASCII codes to their character values, and using the DataSift client library to do this. It also includes this gem:

{% gist 619171 %}

So go check out (and possibly swear at or cry over) my code on [Github](http://github.com/chrisalexander/Refucktoring). Many thanks to @jasongorman for organising the session!
