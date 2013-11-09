---
layout: post
heading: 'An introduction to ARNIE'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie.jpg
  hassmall: false
  showonpage: false
categories: uni
---

## An introduction to this series

Since October I have been working in a team of 4 students in the Cybernetics department at the University of Reading developing a robot called ARNIE as part of our degree. The MEng Challenge is a 30-credit (25% of our year's total) module where we work in a team to design and build a system to achieve a certain goal.

I have been sharing bits of information about ARNIE as we have been developing it, but I thought it was time to get into the gory details and blog in detail about what we've been up to. This is the first in a series of blog posts I have produced that explain how the robot works overall, then dives into details about the particular aspects I have been working on.

## An introduction to ARNIE

ARNIE conveniently stands for Anthropomorphic Robot with Networked Intelligence Engine. Or something like that - we wrote it on the whiteboard, rubbed it off to do some insane maths, and then promptly forgot what it stood for. But we like the name so it stuck.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie.jpg" %}

Here's a real photo of ARNIE:

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie_Robot.jpg" %}

This is ARNIE in his standard configuration but without his eyes. They are the two webcams attached to the laptop in the background; usually they'd be mounted on his head something like this:

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie_eyes.jpg" %}

There's more info about ARNIE's hardware coming in an upcoming technical overview post.

## Project goals

A project would be nothing without a goal to mark you against, as they say.

ARNIE has a vague purpose beyond providing a constant source of entertainment and danger. With the 2012 Olympics coming up in London, we were originally tasked with building a robot that could identify the Olympic Flame, light a splint it is holding in its arm from the flame, and then transfer the light to another torch to continue the Olympic Flame.

This task of course seems trivial for any human to attempt providing good vision and motor control. However, it represents a substantial challenge when attempted completely from scratch.

In its current state, ARNIE is very near to completing its goals. A few final systems integration tasks remain to plug everything together, but everything looks on schedule for deadline and demo day.

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/arnie-robot).

* [Spine](https://github.com/arnie-robot/Spine)
* [Kinect software](https://github.com/arnie-robot/libfreenect)
* [PYT](https://github.com/arnie-robot/PYT)
* [BrainJS](https://github.com/arnie-robot/BrainJS)
* [English](https://github.com/arnie-robot/English)
* [Decypher](https://github.com/arnie-robot/Decypher)
