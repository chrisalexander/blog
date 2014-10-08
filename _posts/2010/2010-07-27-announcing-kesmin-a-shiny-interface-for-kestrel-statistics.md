---
layout: post
heading: 'Announcing Kesmin'
subheading: 'A shiny interface for Kestrel statistics'
categories: life
---

*TL,DR; I made an open-source project, if you use Kestrel and you find getting stats out of it bloody hard, go download it [here](http://code.google.com/p/kesmin/).*

I've been doing some playing around with [Kestrel](http://github.com/robey/kestrel), Twitter's open-source distributed message queueing application.

It allows you to assign an arbitrary string into a queue specified by a given ID, and then retrieve the strings from the key in the same order that you inserted them.

I won't go into too much detail, but Kestrel is quite good for putting reasonable volumes of data through a cluster of servers when you don't really mind about getting the data out in precisely the same order, but do mind about losing a lot of data. It's got read locking - which means items are only removed from queues when the client acknowledges it has handled it accurately - and options for high levels of logging so you can restore data extremely easily if a node happens to go down. Don't get put off by the loose ordering - this is only because queues are distributed across multiple machines (if you so configure it - extremely useful) and you will get the data returned in a reasonable if not entirely accurate order - it's generally not that far out though (strongly depends on the number of nodes you have in a cluster).

However, while I was debugging a number of bits and pieces passing through Kestrel, I found myself needing access to Kestrel's statistics, and telnet-ing directly into it and executing stats commands simply didn't cut it.

So to solve this problem, I have been working on *Kesmin*.

Kesmin is an open-source (MIT license) "shiny interface" to the statistics and common functions admins and developers frequently need to see and tinker with when working closely with Kestrel.

Currently, Kesmin features stats for:

* Server statistics (like you would get from Memcache)
* Which queues are loaded into a Kestrel sever
* Stats on each of those queues

... and buttons to:

* Get from a queue
* Peek from a queue
* Flush a queue
* Delete a queue

It is all written in PHP, and all of the functionality is available through a web interface with a *very* hip Web 2.0 CSS-3 enabled background gradient. YEAH.

Upcoming features (I have great plans but no time, so no guarantees, mmkay?):

* CLI interface
* Stats across clusters rather than just on a node
* Empty / delete all queues
* Random features that I would find useful (and hopefully other people would too)

You can go download (and maybe even contribute! Please!) [Kesmin now from Google Code](http://code.google.com/p/kesmin/). Be sure to read the [Assumptions](http://code.google.com/p/kesmin/wiki/Assumptions) and [Configuration](http://code.google.com/p/kesmin/wiki/Configuration) first.
