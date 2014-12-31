---
layout: post
heading: 'Controlling MotorHawk with C#'
categories: uni
---

For the robot project I am using a [MotorHawk board](http://www.pc-control.co.uk/motor_hawk.htm), which essentially provides motor control over USB.

Unfortunately the code that comes with it isn't that great. I knew it was Windows only from the start, but when I had a closer look, it comes with a DLL, and sample applications in managed VB and managed C++.

If you've ever looked at managed C++ coming from a non-managed C++ background, you will know how ugly it is. I was not even able to get the project to build. So I set out with a couple of hours to get something nicer sorted out so I can hook it all into ROS eventually and get some real automation going on.

It turns out this is actually ludicrously simple. First of all I used .NET's P/Invoke capability to load in the DLL. Then it is simply a matter of giving the function definitions as externals (fortunately no object marshalling has to go on here, which makes life super-easy) and then using it.

Here's a video of my first hash at it in action:

{% include youtube.html id="jxe89SwNbrA" %}

I'm pleased to announce a much cleaned-up version of the code is now [open source under the BSD license](https://github.com/chrisalexander/HawkSharp). It doesn't include the hawk.dll but you should have this if you have bought a board (it will be on the CD in the DLL directory). Currently it supports MotorHawk's simplest functionality only (that's all I really need). If you're interested in extending (in my code design I aimed to make this as easy as possible) please do so and send the GitHub project a pull request and I will happily merge it in after some testing.

The project also includes MotorUI, a simple WPF application which binds buttons and keyboard arrow keys to the functions, so you can use it to control the motor with your keyboard and mouse. Look out for network-based functionality coming soon (as I need that for the project!).
