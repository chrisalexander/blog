---
layout: post
heading: 'ARNIE's Brain: Kinect'
categories: uni
---

This post covers how ARNIE can be controlled by using an Xbox Kinect peripheral.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/kinect.jpg" %}

## Foundations

Back when the Xbox Kinect was released in late 2010, there were a number of projects almost immediately started up with the aim of breaking into Kinect so it could be used for many things other than playing Xbox games.

The device provided a unique opportunity for hackers and enthusiasts to get their hands on some pretty advanced sensor technology for a very reasonable price. Kinect includes a camera, a depth sensor, a motor for controlling tilt and microphones for voice recording and directional analysis.

Not only that, but the Kinect does a significant amount of processing on the device itself. This means that the depth information is provided as just another camera source, without any special decoding or other techniques required.

The software used to power the Kinect component of ARNIE is based on the Libfreenect drivers, the first mostly complete ones to emerge. Since then a lot of development work has gone into the drivers, but our software was assembled in just a few days, mostly as a demonstration point for how the robot can be controlled.

## Purpose

You can use the Kinect as part of the brain system on ARNIE. Instead of being controlled by a piece of software, it acts as a teleoperation (remote control) system. This means that ARNIE can reflect the motions you make with your arm in free space.

## Implementation

The actual process involved in making the Kinect data usable by ARNIE is fairly simple.

The Spine software, detailed in a previous post, is used for all of the interaction and conversion. Hence all that remains is extracting data from Kinect and getting it to the spine.

The Kinect software is run on Beth, which is running Ubuntu. The code implemented is written directly on top of the Libfreenect driver so that it may directly process callbacks from the device drivers. The software is written in C and compiled as part of the Kinect driver. It makes use of OpenGL for rendering on the screen.

The first step is that an active area is defined. In our laboratory there is a "Kinect Active Zone" and "Kinect Danger Zone" outlined on the floor. The active zone is an area approximately 1 meter deep and 2 meters across. It is in this area that the Kinect is calibrated to observe signals within. The "Danger Zone" is around 2 meters around this; the area is prohibited for entry by anyone other than the person currently teleoperating the robot through Kinect.

The ARNIE-specific software uses solely the depth information made available to it by the Kinect drivers. This data is a single-dimension array of size (640×480), the resolution of the display, where each point is a value between approximately zero and 9000 that correlates to the depth of the object at that point in the environment. This value is not linear with depth, however as we will be narrowing the operating range down, we can assume it is linear within that area.

There is an initial position defined at the center bottom of the display at a depth of 700 units. This is a point in real space at about waist height, directly in front of the Kinect, at the back of the Kinect Active Zone (furthest away from the sensor).

It is this point that the command signal is sent to the robot arm from. The algorithm detects the closest point to the sensor, and that is used as the target point. It is possible to move the point by making motions with your arm.

However, to prevent jittering, jumping, and erroneous signals, there are some thresholds in place to prevent values changing significantly.

First of all, the depth is limited to within the range 400 - 700 units. These correlate almost exactly with the area outlined on the floor as the Kinect Active Zone. Second of all, motions in x, y and z are thresholded at maximum and minimum values. This means that there cannot be a jump of larger than a certain value in x, y or z. In addition to this, there is a minimum change threshold: the output signal will only be changed if the new point is a certain distance away from the previous point; this prevents jitters.

The advantage of these thresholds is that you can wave your arm in front of the point that the sensor is currently set to and it will not be affected. It is also possible to wave your other, non-controlling arm around closer to the sensor than your controlling arm, and so long as it is far enough away from the other arm, the point will not jump.

The final piece of the code is a separate thread that dispatches new positions to the Spine via UDP when they become available.

## Demo

Here's a demo of the Kinect teleoperator in action, when the arm was not mounted on ARNIE's body.

<span class="youtube"><iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/ToJt5nvBSpc?wmode=transparent&amp;fs=1&amp;hl=en&amp;modestbranding=1&amp;iv_load_policy=3&amp;showsearch=0&amp;rel=0&amp;theme=dark&amp;hd=1" frameborder="0" allowfullscreen=""></iframe></span>

## Previous posts in this series

* [An introduction to ARNIE](http://www.chris-alexander.co.uk/4792)
* [An introduction to ARNIE: technical overview](http://www.chris-alexander.co.uk/4800)
* [ARNIE's Brain: Spine and networking](http://www.chris-alexander.co.uk/4811)

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/chrisalexander).

* [Spine](https://github.com/chrisalexander/Spine)
* [Kinect software](https://github.com/chrisalexander/libfreenect)
* [PYT](https://github.com/chrisalexander/PYT)
* [BrainJS](https://github.com/chrisalexander/BrainJS)
* [English](https://github.com/chrisalexander/English)
* [Decypher](https://github.com/chrisalexander/Decypher)

 