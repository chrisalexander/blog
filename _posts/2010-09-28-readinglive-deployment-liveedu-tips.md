---
layout: post
heading: 'ReadingLive deployment - Live at edu - tips'
categories: uni
---

So the Uni have now begun rolling out [readingLive](https://live.reading.ac.uk) (a rebrand of [Live@edu](http://my.liveatedu.com/)) to all students, so once mine was activated this evening I proceeded to update my Gmail settings (as described in my previous post on [how to make University e-mail usable](http://www.chris-alexander.co.uk/2847)) and ran into a whole stack of problems. I would go so far as to say the process was a nightmare. So here is what I learnt so that the same problems do not befall you.

## How to log in

This may seem like a simple one, but it's not. Here are the principles:

* Your readingLive account is *not* your Reading University account. It is, in fact, spawned *from* this account (it has the same username and password at initialisation) but any changes you make to them are now forever separate.
* The new account, *username*@live.reading.ac.uk is a Windows Live account
* Your new account, *username*@live.reading.ac.uk **is not** a Windows Live account.

Simple.

What this actually means is that if you go to Outlook.com and try and sign in, all kinds of bad things will happen. readingLive seems only to work if you sign on from [https://live.reading.ac.uk](https://live.reading.ac.uk). So don't go trying to sign in from anywhere else, it will end *badly*.

## How to set up IMAP / POP / SMTP (and Exchange-based) access

Surprisingly, IMAP POP and SMTP are available in this release. Unsurprisingly, they are nigh-on impossible to set up (someone *really* liked Outlook web, it seems).

Therefore there are some issues you will have setting this up, undoubtedly as I and numerous other people did.

First of all: **neither IMAP, POP, SMTP or Exchange will work unless you reset your password *and change it*. After about 2 hours of rage I found this information [hidden away on this page](http://www.reading.ac.uk/internal/readinglive/its-rl-email-client-setup.aspx) on the Uni website. This means you have to go through the password reset process, and actually change your password (unlike what I did, which is reset it to the same thing, which didn't have any effect whatsoever).**

How to change your password:

* Go to your Outlook web access thingy
* Click on the tiny "Options" link ([hint](http://resources.chris-alexander.co.uk/liveatedu/options.png))
* Hit "Change your password" next to the big key icon in the box on the right
* Now depending on your luck, you may get redirected to one of two places. If you're lucky, you will be taken to the password reset screen, so skip this step and rejoice. If you're not so lucky you will be taken to some kind of Account screen. Now this page doesn't allow you to reset your password on itself, so why the hell it's here on the end of a "Change your password" link is anybody's guess. The address *might* be **account.live.com**, further adding to the suspicion that this might be a Windows Live account (but it still doesn't behave like one). You have to hit [this](http://resources.chris-alexander.co.uk/liveatedu/account.png) tiny little "Change" button to go to the aforementioned next screen.
* Now everyone's on the same page (quite literally) you can reset your password *to something new*.

By the way, to get out of the Options window, the only way out I could find is the tiny "My Mail" link in the top right just underneath the logo.

So now that's out of the way, time to go actually implement this stuff. If you want to use Exchange or ActiveSync or something like that, go ahead and do it now, you're sorted! Make sure you use your full username in the form *username*@live.reading.ac.uk and the password you just reset to! Everyone else, one more thing to do...

We need to grab a piece of information first which is the cluster of servers we are running on. To do this:

* Click the dropdown arrow next to the blue encircled "Help" question mark in the top right of the mail window ([hint](http://resources.chris-alexander.co.uk/liveatedu/dropdown.png))
* Select "About"
* Grab the value under "External POP setting:" and next to "Server name:". Mine was *pod51002.outlook.com* and yours will be similar if not the same.
* Now you have all the configuration values!

The full POP/IMAP/SMTP settings are below:

### POP

Server: *podXXXXX.outlook.com* (from earlier)

Port: *995*

Encryption: *SSL* (this is required to be enabled, check the Advanced section of your client for this bit)

### IMAP

Server: *podXXXXX.outlook.com* (from earlier)

Port: *993*

Encryption: *SSL* (this is required to be enabled, check the Advanced section of your client for this bit)

### SMTP

Server: *podXXXXX.outlook.com* (from earlier)

Port: *587*

Encryption: *TLS* **Important note:** SMTP here does not support SSL, you will get a "Server Unreachable" error if you try with SSL. When enabling Gmail to do this, do *not* check the SSL box. Gmail uses TLS automatically, but adding the SSL will break it.

Hope all these tips helped - let me know if you have more!
