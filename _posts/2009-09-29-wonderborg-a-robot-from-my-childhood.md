---
layout: post
heading: 'WonderBorg: A Robot From My Childhood'
categories: uni
---

I think I may have finally found out where my love of all things Robotics came from, and its something that I had completely forgotten about until it appeared yesterday afternoon.

While I was home for the weekend, my Dad was clearing out one of the sheds in the garden and came across WonderBorg. Don't laugh at the name as it was actually from over 10 years ago, and was one of the first robot projects that I undertook.

WonderBorg was bought for me as a present one Christmas (and none of us here have any idea which one it was, but it was about 10 years ago). It required assembly of parts, plugging stuff in and threading wiring (no soldering quite that young for me!), but by far the coolest bit was that you could program it through your computer. More on that later, but first a look at the robot itself.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009-300x225.jpg" %}

As you can see it has 6 wheels in a very unusual configuration. The robot's motion with these actually depends on slip on the front pair and rear pair, otherwise it would never move.

The wheels are mounted in threes, with one motor for the left bank and another for the right bank. Each bank of motor and gearing system is incased in its own housing, which can be rotated about the length of the robot to make it taller or shorter, best illustrated by this front-on picture:

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009003-300x225.jpg" %}

In terms of sensors, right at the front and centre is an infrared receiver, used for programming the robot wirelessly, and for "challenging" and "detecting" other WonderBorgs. It also has a Light Dependant Resistor mounted on the top, infrared front left and right sensors for detecting obstacles, and left and right "feelers" acting as bump sensors.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009004-300x225.jpg" %}

The programming was done through a very simple computer interface, which not only did I manage to find the disc for, but most of it works under Windows 7! The only bit that fails is sending to the robot, which is unfortunate but not unexpected thanks to its use of COM ports.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009001-300x225.jpg" %}

As I said I didn't put any of the electronics together myself, but here's a quick view of the circuit board controller with the sensors mounted on it.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009005-300x225.jpg" %}

Here's a final picture and a video of WonderBorg in action:

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/09/26092009002-300x225.jpg" %}

<span class="youtube"><iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="505" src="http://www.youtube.com/embed/GcV4Uqoxi5M?wmode=transparent&amp;fs=1&amp;hl=en&amp;modestbranding=1&amp;iv_load_policy=3&amp;showsearch=0&amp;rel=0&amp;theme=dark" frameborder="0" allowfullscreen=""></iframe></span>