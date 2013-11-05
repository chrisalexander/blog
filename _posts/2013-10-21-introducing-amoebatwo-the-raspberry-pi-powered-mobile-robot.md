---
layout: post
heading: 'Introducing AmoebaTwo'
subheading: 'The Raspberry Pi-powered mobile robot'
leader:
 image: http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_20131015_2202281-300x225.jpg
 position: bottom left
 hidetext: true
 hassmall: false
categories: robots
---

It's been a long time since I started my University final year project and [came up with Amoeba-1](http://chris-alexander.co.uk/on-engineering/uni/introducing-amoeba-1-and-the-birth-of-project-origin/).

Now I'm pleased to report on what I have been working on in my spare time for the past couple of weeks - the next generation of that project - and the new robot, AmoebaTwo.

This device is an evolution of the previous one, in that it certainly takes account of the learnings from that project. However, neither the hardware nor the software is as complex as it was before. This is in part due to time constraints (I only have my spare time to work on this, where as before it was like a full-time job) but also because the last machine was far too complicated, which resulted in a number of issues best left in the report.

On to the details...

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_20131015_2202281-300x225.jpg" %}

The robot once again makes use of a [BigTrak](http://www.amazon.co.uk/Zeon-Limited-BIGTRAK-Bigtrak/dp/B0035IZ85G/ref=sr_1_1?ie=UTF8&amp;qid=1382302251&amp;sr=8-1&amp;keywords=bigtrak) chassis. I haven't yet found anything better - you can often get it for less than £25, it's got a great gearbox, and it's really easy to take to bits. This time it is considerably less modified - I didn't need to chop half the top off at least - and it looks pretty cool whizzing around the flat.

On board processing is provided by a Raspberry Pi, Model B. This is powered by a 5v 1000mA mobile phone battery charger - one of those mini bricks you can drop in your bag for when your phone runs out of juice. Turns out the Raspberry Pi isn't all that hungry for power, because I have had it running for hours and the unit reports less than 20% charge used. This unit is for powering the Pi and LEDs when they're on - the motors are powered by the 3 D-cell batteries in the BigTrak base, as always.

Motor interface is provided by a [PiFace](http://pifacedigital.wordpress.com/) board. The advantage of this is that it is gloriously simple to work with, and I don't accidentally blow anything up (something of a habit with me and electronics). Additionally, it was designed for the Raspberry Pi, so it slots very nicely on the top. This gives a total of 8 outputs and 8 inputs available. The first two outputs are hooked up to relays - this is what drives each motor. Unfortunately the by-product of this is that the robot can't go backwards, but it's not the end of the world for now (the alternative was for it to never be stationary, which didn't seem like a great idea!) The third and fourth outputs are currently used for lighting up the front (blue) and top (green, which I swapped out for the IR one that used to be there) LEDs. The main red switch on the top is a break switch for the motor power (for when it inevitably all goes wrong).

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_20131015_2202461-300x225.jpg" %}

Finally the speaker is hooked up to the Pi's headphone socket. This is all held together by a bread board glued on to the inside of the battery pack.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_0479-Edited-300x200.jpg" %}

Of course there is also some Lego in there! Whoever designed the Raspberry Pi clearly knew what they were doing - it fits inside the blocks perfectly.

On the front are two bump switches. These are ultimately going to be used to protect the motors, and to an extent the furniture - however the robot goes at quite a pace so getting stabbed by one of those points isn't going to do a lot of good either, I think...

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_0476-Edited-300x216.jpg" %}

The Pi has a [WiPi](https://export.farnell.com/jsp/raspi/orderPad.jsp?&amp;country=GB) device for wireless networking. Initially this connected to my home wireless network and I had to SSH over that to get in. Now I have modified it so the Pi acts as a router itself. This means any of my devices (including tablets, phones etc.) can connect to a wireless network the Pi creates, which provides better bandwidth and latency when doing device-to-device networking (useful when driving robots!) Additionally the Pi can use a NAT to forward on internet requests over the LAN, if you connect a cable to it. All very useful.

I've written a number of pieces of software for the robot so far. The first is a core library, which wraps all the PiFace methods in an interface designed specifically for this robot platform. This makes coding for it pretty quick, even though it wasn't all that sluggish to begin with. The rest are mostly experiments (CLI interface, bump sensor tests) but the one I have put the most work into is Glove, which allows you to control the robot over HTTP.

Glove uses Facebook's Tornado HTTP server for Python to serve HTTP API endpoints for controlling the robot. So a GET /drive/forwards, GET /drive/stop, GET /light/top/on and so on all work. I also built a basic UI using Angular and Bootstrap, which you can see a screenshot of below. The beauty of this approach is all you have to do is hook the device you want to use onto the robot's wireless network, then hit the URL and you're good to go. It has also been specifically designed to work with touch events, so it's really smooth on tablets.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/wpid-Screenshot_2013-10-20-20-43-22.png" %}

There's a lot more software and hardware work to do on the robot. I really want to integrate the BigTrak keypad (it shouldn't be hard, mine is just a bit too destroyed to get working so I will need to pick up a replacement) and there's a lot of cool stuff to do in code and around vision.

Bonus - soldering in the kitchen...

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/10/IMG_20130817_175800-300x225.jpg" %}
