---
layout: post
heading: 'Enable SSH connections to your computer'
categories: dev
---

I've been hunting around since my last blog post (about the mobile SSH client) for how to securely enable SSH connections into my home computer. I hunted for ages for a suitable solution, and came up with this method found [here](http://users.piuha.net/martti/comp/ubuntu/en/install.html) (under number 5)

Firstly install the Open SSH server using the following command:

Then, modify your config file to allow certain users to log in using SSH (I like to use leafpad, you may prefer gedit, whatever):

Ensure this file has the following lines in it (not commented out either!):

Obviously here replace &lt;user&gt; with a user you wish to allow. You can have mutiple of these lines for more than one user access :) By default my config file had "PermitRootLogin yes" so you will want to change that.

So save that file, then you need to restart the SSH client with the following command to enable the changes:

There are some other config options available, these are mentioned on the linked site above, but these ones got me started :)