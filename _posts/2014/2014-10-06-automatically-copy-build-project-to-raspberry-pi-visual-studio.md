---
layout: post
heading: 'Copying built code to Raspberry Pi'
subheading: 'Working with Mono on Raspberry Pi'
categories: robots
---

My latest little robot project is coming along quite nicely.

As a bit of a challenge to myself, I am pushing the software and hardware that I will be using.

The on-board processing on the robot consists of 3 Model B Raspberry Pis and a Galaxy Nexus mobile phone.

In order to stop myself from going completely insane while trying to code for that lot, I have decided to use C# and Mono. This will hopefully provide a flexible and rock-solid framework on which to build some pretty cool stuff.

I have been writing some C# test code in order to try out Mono's capabilities on the Raspberry Pi devices as well as make sure I have the dev process ironed out.

As the hardware on the Pi is pretty specialised (it doesn't plug into my PC let alone have drivers!) code will have to be pretty much tested on the hardware, then mocked out for unit and integration tests on my PC. I am using Visual Studio 2013 for the project.

After a couple of attempts, configuring the Raspberry Pis turned out to be a bit of a faff - doing one is OK, but when you have config you want to apply to 3, some to only one or two of the devices then it quickly becomes a pain. So I have been solving that problem with [Ansible](http://www.ansible.com/home), which I will document in more detail another day.

Copying the files to the Raspberry Pis every single time I built it so that I could run it was also a pain. The first couple of times I did it with Filezilla over SCP but that very quickly got boring.

So this morning I set up file shares on the Raspberry Pis and set up Visual Studio to copy the files automatically on successful build - then you simply need to Ctrl+Shift+B, wait a second, then run the file using the command line on the Raspberry Pi it was copied to.

There's a pretty good guide to getting Samba (windows file sharing service for Linux) set up on the Raspberry Pi [over here](http://raspberrypihq.com/how-to-share-a-folder-with-a-windows-computer-from-a-raspberry-pi/); it's not all that complicated but I needed to do it on three devices, so Ansible to the rescue.

Once that has all been run with Ansible, it is simply a case of mapping the network drives in Windows and configuring Visual Studio.

My mapped drives now look like this, which is pretty cool as each Raspberry Pi is mapped to the X: Y: and Z: drives:

{% include images/block.html src="https://camediahost.github.io/pictures/buildpi/drives.png" %}

In Visual Studio, you then configure your post-build events to copy over all of the project resources to the shared folder. Mine looks like this:

{% include images/block.html src="https://camediahost.github.io/pictures/buildpi/vs.png" %}

And then when you build or rebuild your project, the new resources are copied over and ready to run.
