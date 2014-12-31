---
layout: post
heading: 'ARNIEs brain: PYT and minimum jerk trajectories'
categories: uni
---

PYT is a minimum jerk trajectory computer and executor. It is part of the ARNIE robot's brain architecture, which I will go on to explain here.

## Purpose

PYT is a component of the brain system that is used to compute and execute optimally smooth motions on the arm. It takes in an end coordinate as its target, receives the current location of the arm from the encoders, then computes a set of motions which would establish a smooth trajectory motion, and sends the commands to the arm via the Spine.

## Theory

Robots execute motions in different ways to humans. A robot's motion is typically not as smooth as you would expect of a human because it uses a so-called "Bang-bang" approach to motion. This means that it accelerates as fast as it can and then slows down as fast as it can to reach the target.

Humans execute smooth motions when moving between points. This has been analysed and is said to be governed in part by Fitt's Law, which states the time it takes to execute a motion is proportional to the logarithm of the distance required to move and the size of the target area. Additionally, humans do not accelerate as fast as they can then decelerate as fast as they can - instead their acceleration curves are smooth.

To that end, PYT implements a technique called "minimum jerk trajectory". In this case, the displacement of the arm is modelled as a fifth order polynomial in the range -1 &lt;= t &lt;= 1. This then provides a fourth order polynomial for the velocity, and a third order polynomial for the acceleration. This means the acceleration is a curve rather than maximum-forwards / maximum-reverse, providing a significantly smoother motion.

In this implementation, the minimum jerk trajectory is executed in coordinate space because this is the only data that that the trajectory computer has available. An even more optimal solution would be to execute a minimum jerk trajectory in the motor space of the arm itself, but that is an experiment for another time.

## Implementation

PYT is a C# command line application which implements a calculator for the minimum jerk trajectory between two points.

It has two modes of operation, both of which actually end up executing the same code. Manual mode allows the user to input an x, y, z coordinate and various other parameters on the command line, and then execute them on the arm. This is useful for testing and demonstrations. It also has an automatic mode, in which it opens a command port which it receives x,y,z target coordinates on. It then uses these coordinates to compute an execute a minimum jerk trajectory on the arm.

The trajectory computation itself is fairly simple. The fifth order equation with known terms is built in the code. The number of samples required is then worked out based on the location of the start and end coordinate.

The start coordinate is received from the arm, and the end coordinate from the controlling user or other application. There is approximately 1 sample per overall millimetre of motion required, despite the fact that in the end each step will end up being greater or smaller than a millimetre in motion. The number of samples required is then interpolated over the range -1 &lt;= t &lt;= 1 and a series of coordinate steps is received as a List&lt;Coordinate&gt;.

Each of these commands is then sent to the arm via the Spine in sequence, with a sleep in between each command of around 35 milliseconds in automated mode, and a user-specified value in manual mode.

### Hardcore: obstacle detection

PYT implements obstacle detection during the automated execution of trajectories. It constantly monitors the feedback of the position of the arm from the encoders, and if there is a discrepancy over a certain threshold between where the arm should be at a given point and where it actually is, it flags this up as an obstacle detection and stops.

If this is the first occasion on which it has detected an obstruction on this trajectory execution, it waits a small time period and then computes a reverse trajectory back to its start point. This means that it detects an obstacle, pauses, and then reverses the arm back to its initial position before the trajectory was attempted.

If there is a problem detected during the execution of the reverse, the entire movement is aborted and human help sought.

## Previous posts in this series

* [An introduction to ARNIE](/4792)
* [An introduction to ARNIE: technical overview](/4800)
* [ARNIE's Brain: Spine and networking](/4811)
* [ARNIE's Brain: Kinect](/4814)

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/chrisalexander).

* [Spine](https://github.com/chrisalexander/Spine)
* [Kinect software](https://github.com/chrisalexander/libfreenect)
* [PYT](https://github.com/chrisalexander/PYT)
* [BrainJS](https://github.com/chrisalexander/BrainJS)
* [English](https://github.com/chrisalexander/English)
* [Decypher](https://github.com/chrisalexander/Decypher)

 
