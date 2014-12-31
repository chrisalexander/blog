---
layout: post
heading: 'Web 2.0 Goes Open Source'
categories: dev
---

We all know how big and how quickly Facebook, FriendFeed, Twitter and the like had to scale. To do so, they had to think outside the box, and make not only wide use, but also many upgrades and contributions to countless open source software projects.

It's something we sadly something we hear very little about - corporate secrecy keeps much of the juicy details at bay - but these next generation services are not only using these projects, but also making significant contributions to open-source projects and even open sourcing entire chunks of their codebase.

I'd like to sit back for a minute, take a look at what these web powerhouses have been building, and appreciate their contributions to everyone's development.

### Caching

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/memcached.png" %}

Some people don't have to worry about caching; some use it to keep a bit of load off their database; others use it to keep their website running.

*memcached* is a distributed in-memory object caching system, used by anyone from me on this site to TweetMeme, right the way up to the largest user in the world, Facebook. Instances vary in size from just a few megabytes up to many hundreds of gigabytes.

The project was around long before Facebook implemented it on the world's biggest social network, but they have also offered many significant improvments, for example:

Boosting the software's performance by over 20% and increasing its memory efficiency by over 30% while adding new functionality.

### Logging

Scribe is an open-source, scalable log aggregation system. Best described by the Facebook developers who came up with it:

It is designed to be scalable, extensible without client-side modification, and robust to failure of the network or any specific machine.

Extremely cool! Not only did Facebook build it, but some of the Twitter developers have been making contributions to it as well.

### HTTP Streaming

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/tornado.png" %}

Brought into the world by FriendFeed, the ultimate stream feed (at its time at least, but that's a conversation for another day), Tornado is an HTTP streaming server written in Python and designed to handle thousands of simultaneous connections receiving real-time feeds of information.

When Facebook bought FriendFeed (and essentially let it stagnate - yet another discussion for another day) they open-sourced Tornado for everyone to start streaming feeds.

### Compiling

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/hiphop.png" %}

Along with the next one, this is one of my favourites.

Not content with PHP's performance, and looking for page load optimisations, Facebook wrote a **compiler** for PHP. It takes your PHP app, translates it into native C++, builds in a webserver then compiles it into machine code. Sickening!

Apparently the performance increases for webserving are huge - as you would expect. Something I really want to try for a frontend-heavy project, or maybe even this site. Maybe it will take compiling to C++ to make WordPress scalable!!

### Storage

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/cassandra.png" %}

Storing terabytes of user data, interactions, profiles and more is actually fairly simple if you have a lot of hard disks. It's retrieving it quickly, querying it, and making it scale for large number of requests that's the trick.

That's where Cassandra comes in.

Written in Java by the Facebook engineering team, it allows a distributed, horizontally scalable (lots of cheap, readily available, and regularly failing hardware), persistent and reliable storage mechanism. Got loads of data? Need to get to it quickly? Have a few cheap servers? Cassandra's for you.

### But That's Not All

I could be here all night writing about the literally hundreds of contributions that Facebook, Twitter and the like have been giving back to the community. I hope this has been a nice taster though, if you want more then head over to the [Facebook Developers Open Source page](http://developers.facebook.com/opensource.php), or to the [Twitter Open Source page](http://dev.twitter.com).
