---
layout: post
heading: 'Chromium OS on the Dell Mini 9'
subheading: 'The Definitive Guide'
categories: hardware
---

I have had a Dell Mini 9 laptop for a long time - probably at least three years. In that time it has struggled under Windows XP (it still has the "Designed for Microsoft Windows XP" sticker, niiiice), Windows 7, Ubuntu, Jolicloud and a few other OSs that didn't last more than a few minutes.

On each occasion it has proved horrendously under-powered. The most use I ever got out of it was carrying it around while my PC at home had remote desktop over the web enabled, and I could use it as a remote desktop terminal into that.

However just before my exams I realised Dell had the great vision to post some Chromium OS disk images which mean that you can quite easily revitalise your Dell Mini 9 with Chromium OS. I'm writing this post on it and let me assure you it is extremely quick!

To get started, you will need:

* A 4GB+ memory stick you don't need
* **An ethernet connection or a phone that supports tethering via USB** (more on this later)
* A half decent internet connection to run some downloads
* A couple of hours free
* A Dell Mini 9 (a 10 may work but I havne't tried it)

Enough of that, let's get started!

* Download the Chromium OS image from Dell. I used the Jan 3, 2012 image as it was the latest at the time of writing.
* Once its downloaded, if you're using Windows, extract the file using a program like 7zip so you have a .img file. Other OS users should be able to use their system's archive functionality.
* Write the .img file to your USB key. On Windows, you can use the Win32 Disk Imager program to accomplish this. Just select the image and the right memory stick to write to. Wait a few minutes while it completes.
* Insert the memory stick into your Dell Mini and reboot it. Press and hold 0 when it restarts to go to the boot menu. Select USB from the list to boot from the USB key.
* When Chromium OS starts, you will need to select your locale and connect to a network. You can't connect to a wireless network because this image does not support the wireless card out of the box. You can either use ethernet or tether a phone on a data plan over USB. Once this is done the ethernet option will highlight and you will be able to continue.
* Log in and run through the setup bits and pieces. You can use as-is, but we'll want to get the wireless and stuff working first, then get it installed on the machine so you don't need the USB key.
* When it has loaded use Ctrl+Alt+T to open a console. Enter "shell" and press return to get a reasonably standard linux shell to work with.
* Run the command "sudo su". The password is "dell1234″. This will give you root access.
* Run the command "/etc/install-wl.sh". This will install the wireless drivers for next time.
* Next we need to fix a bug in the installation script (don't worry, it's quite easy to do!). First you need to open the right file. Enter the command "cd /media/removable". Use the "ls" command to list the attached devices. You will need to find the one with the *syslinux* directory on it. Mine was the first in the list. Use the cd command again to move to that directory then into syslinux, something like "cd A1258B/syslinux".
* Run the command "vi usb.A.cfg". This opens the file we need to edit. Use the usual vi commands to change the command "root=/dev/sdb3″ to "root=/dev/sda3″. Save and exit the file (Esc, :wq Enter).
* You're now ready to install onto the SSD. Enter the "exit" command twice, to get back to the crosh prompt. Enter the command "install", press return, and enter the password "dell1234″ at the prompt.
* Once it's finished, use the "exit" command again to get back to the main window. Press the power button to get to the lock screen and select Shut Down (top left corner). Once it's off, remove the memory stick, reboot and enjoy :-) 
