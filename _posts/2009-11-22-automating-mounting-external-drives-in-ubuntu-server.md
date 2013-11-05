---
layout: post
heading: 'Automating Mounting External Drives in Ubuntu Server'
categories: dev
---

I have two identical computers sitting under my desk - one is running Windows 7 and is doing all the productive stuff, and the other is running Ubuntu Server, and acts as a number of things.

Its primary function is a development box - testing web applications that I concoct usually. But it has an additional function of serving as a backup point for all of my data.

As you may already know, I take data security very seriously - so seriously that I currently have 8 copies of my University work for this year. (If you're interested, that's one on my data partition of my computer, one on each of the two hard drives in the server, one on each of the two external drives attached to the server, one on a memory stick, one on my webserver in a datacentre somewhere and one more on Microsoft's Live Mesh servers.)

The problem I had was that I was want to make it easy to mount the external drives on to the Ubuntu Server, without requiring them to be on when the server was booted (it's not on all the time). Ubuntu Server does not automatically mount like Ubuntu Desktop, so it was some time for some scripting.

## Getting the UUIDs

The first problem is that the address (/dev/sda1 or something similiar) of the devices changes depending on when they are plugged in or whether or not they were active when the server booted.

So it is best to mount with the devices UUID, which will not change (it is a standard that is fixed for all devices by the open source standards body).

The easiest way to get the UUID of drives in Ubuntu Server is to plug them in (you don't have to mount them), and then run the following command:

This will give you an output similiar to this:

Next, you need to identify which row points to which drive. I know that the one I want to mount in this example is called "WESTERN" (after the device manufacturer - I have a ruthless naming policy) so I just pick out the UUID from that row, in this case "E260A05A60A03767″.

## Creating the Script

Next up we need somewhere to put this command. The best place to put it is in a simply-named script, that you can run quickly whenever you want to mount the device.

First of all we must decide where we want to mount the drive to. I would like to mount it to /media/backup, so I create that folder with this command:

Now, we change to the directory which will allow you to easily run the script we are going to create:

Next up, use Vim to create the file for the script. Name it whatever you want to type when you need to mount your drive - I called mine "mount1″.

Next edit the code to add the following lines into it, replacing {UUID} with the UUID of the drive we found out earlier. I am mounting this to /media/backup, but you can mount it to wherever you like.

(If you're new to Vim, to add some text press *a* and then start typing. To save, press the escape key, then type *: x* and press return to save and exit)

*Note:* This assumes your partitions are NTFS - change the -t argument from *ntfs-3g* to an alternative if this is not the case. Check out [this page](https://help.ubuntu.com/community/LinuxFilesystemsExplained) for more on the options available.

## Running the script

Before we can run the script, we need to have permission to execute it. In a terminal, do

We're now ready to go! You can run the script simply with this command:

## Unmounting Script

Fortunately the unmounting script is considerably easier to set up.

Perform the steps above for creating a script, except name it something like "umount1″, and use the following code:

Don't forget to make it executable before you try and run it!

*Happy Scripting* 
