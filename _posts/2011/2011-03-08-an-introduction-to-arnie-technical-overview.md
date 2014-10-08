---
layout: post
heading: 'An introduction to ARNIE: technical overview'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie_nude.jpg
  hassmall: false
  showonpage: false
categories: uni
---

This post provides an overview of the entire ARNIE architecture, with the intention of providing a baseline understanding for how everything works together before I dive into the deep technicals of it all.

## Hardware

ARNIE's hardware is composed of the main robot body, in addition to numerous PCs used for running its software.

### Robot body

The main robot body consists of an arm and head mounted on a metal frame. This photo shows ARNIE in his old (wider/fatter) configuration. The arm and head are mounted on an upturned U shape chassis with G-clamps (a temporary solution). The head is mounted centrally on the top beam, and the arm mounted with a 90 degree rotation on the outer right "shoulder".

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/arnie_nude.jpg" %}

The arm is 3 degrees of freedom. It has a shoulder joint, which allows it to rotate the entire structure about the robot's x-axis (the arm's y-axis, due to the 90 degree rotation). This has the effect of lifting the arm up and down vertically. Its second shoulder joint is bound to the arm's elbow joint, in that they cannot go within certain boundaries due to constraints on the position of the motors which control the joints. The shoulder component moves the arm in and out from the arm's main axis (so if the arm is horizontal, this is towards and away from the body) and the elbow motor moves the arm along its main axis (if the arm is horizontal, this is across the robot's body).

The arm is powered by an amplifier, and uses a Quanser board to hook it up to the computer that controls its motion (more on that later).

The head is one of custom design by one of the Cybernetics lecturers at the University. It has a main rotation on its y-axis (vertical), which essentially allows for rotation of the head left and right, and a second motor mounted on the top of this which points the eye mounting platforms up and down. It also has its own powered amplifier, and a Quanser board to a controlling PC.

The bottom of the chassis is bolted to the table with G-clamps.

### Computers

There are a total of 6 computers currently involved in running the software to power ARNIE's systems.

Dannii and Faye are two computers running an operating system called xPC Target (which is based on MS DOS), which is a realtime operating system for which code is compiled by Simulink running on other computers. Dannii is the realtime controller for the arm, and Faye will be the realtime controller for the head (it's currently not hooked up). These PCs are responsible for executing the low-level control signals on the devices. They receive data from the encoders on the arm and head, and use this in a feedback loop to control the system based on externally provided reference signals. For example, Dannii runs a PI-controller which ensures the arm's x, y and z positions are within a few millimetres of the reference signals for those locations.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/dannii.jpg" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/faye.jpg" %}

Ellie is a standard PC running Windows XP and Matlab R2008b, which is used to host and compile the Simulink models for the arm and head. It directly programs and commands the xPC Targets (Dannii and Faye). Sometimes we commandeer it to run the eyes, but mostly that's done from a team member's laptop.

Amy, Beth and Cassie are all "brain" PCs. Amy runs the Spine software; Beth runs the Kinect software and the BrainJS system (not at the same time); Cassie runs the trajectory planner and executor, and occasionally the other brain command system (more on all of those in later posts). Amy and Cassie both run Windows 7; Beth is running Ubuntu 10.10.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/02/amy.jpg" %}

Incidentally, Beth, Cassie and Ellie aren't named after celebrities because we couldn't come up with ones that fitted the naming constraints (and a computer named Beyonce would have been a bit suspicious).

## Software

This is a general outline of the software architecture; we'll get into a lot more detail for some of these components in future posts.

The software can be broadly divided into two categories: low-level control and brain systems.

### Low-level control

The two xPC Targets run the low-level control systems as previously discussed. Their software is compiled by Matlab from a Simulink model of the system. This is then delivered over the network and run on the xPC Target itself. As this was developed by one of my team members I shall not go into much further detail on this.

### Brain systems

The brain is a distributed system in that it is comprised of several software applications running on different machines, communicating over the network to send signals between each other, and send and receive signals from the xPC Targets.

While there is one brain system, there are two intelligence modules that can be hot-swapped with the rest of the architecture. One of these, developed by one of my colleagues, is a neural network-based control system. The alternative that I developed is based on an instructional language and state machine (the "classical" approach, in contrast to the neural network).

To provide additional environmental information that the arm and head's encoders cannot provide, another colleague developed a software application for using two infrared cameras to provide information on the location of flames within the workspace.

A brain is comprised of one of the brain systems (neural network or classical), with the addition of the Spine, PYT and vision processing software components. There will be considerably more information on these systems in later posts, but for now this diagram describes how the entire system works together in the classical configuration:

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2011/03/CommsRoutes.png" %}

### Communications

How the communications work between components will be detailed in a later post.

## Previous posts in this series

* [An introduction to ARNIE](http://www.chris-alexander.co.uk/4792)

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/chrisalexander).

* [Spine](https://github.com/chrisalexander/Spine)
* [Kinect software](https://github.com/chrisalexander/libfreenect)
* [PYT](https://github.com/chrisalexander/PYT)
* [BrainJS](https://github.com/chrisalexander/BrainJS)
* [English](https://github.com/chrisalexander/English)
* [Decypher](https://github.com/chrisalexander/Decypher)

 
