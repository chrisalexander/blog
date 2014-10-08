---
layout: post
heading: 'Canon Printer and Windows 7 Problem Fixed'
categories: life
---

Recently I have been having some problems with my Canon MP810 Multifunctional Printer and my Windows 7 desktop computer. I thought I'd post the exact problem and how I solved it for anyone else who may be having the same issue.

I'm not sure exactly how this problem was caused, but after using my Canon printer for several weeks perfectly well with Windows 7, I turned it on and Windows gave the error "USB Device not recognised" - essentially saying that the device had malfunctioned, and that it could no longer be used. I knew the printer itself was fine because functions on the printer itself (such as photocopying) worked fine.

After lots of fiddling around, changing USB ports, reinstalling drivers etc., I tried using the printer on my other Windows 7 install on a MacBook, and everything worked fine. Thus my solution was like so:

* Re-install Windows 7 completely or from an image  
* This seemed to be the only way I could get it to recognise the printer again. You may be able to roll back the drivers, or do a System Restore to an earlier point. Regardless you should always back up your data and keep regular images of your Operating System. Fortunately my image was only from a month or so ago, so I lost no data (thanks, backups!) and not too many installed applications / settings.
* Install the Windows Vista 32-bit or 64-bit driver from the Canon website  
* You will have to obtain the correct driver for your printer from your local Canon website - they are all listed on [Canon.com](http://www.canon.com). Make sure you get the 32-bit or 64-bit for your system architecture, as the other will not work.
* This was done on a system that had had the Canon software from the CD installed, but it should not make a difference.
* Once the driver is installed, *then* you can plug the printer and turn it on. Print a test page from Word and it should all be working fine.

Again this is how I fixed this particular issue, yours may not be exactly the same problem but hopefully it can help. I have a suspision that this was caused by a problem in Windows 7, but there is no way of tracking it down and reporting it as there are so many things it could have been.