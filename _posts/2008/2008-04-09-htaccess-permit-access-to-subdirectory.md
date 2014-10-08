---
layout: post
heading: 'Htaccess: Permit access to subdirectory'
categories: dev
---

I've been working on a project for a while now and have been searching high and low for a solution to a problem I was having with my .htaccess file. I've finally found the solution so I thought I would share for anyone else struggling with the same problem.

On an Apache-powered webserver, the .htaccess file can be used to easily change the permissions for reading or accessing a particular file or directory on the server. There are literally hundreds of tutorials on the internet describing how to configure .htaccess .htpassword and .htgroups files for controlling directory-specific permissions and other Apache settings. However my problem was different.

I have a password-protected directory, using groups to control access to it. What I wanted to do was enable anyone to access a certain subdirectory within this directory, but not allow them to access the rest of the directory or other, protected, subdirectories.

I found a tutorial on this site that helped me on my way: http://tinyurl.com/5ja29j<br> However, my managed server settings meant this didn't work exactly, so I had to tweak the solution a little bit. This is the working setup I have at the moment:

In the main directory's .htaccess file is:

    SetEnvIf Request_URI "^(absolute/path/to/allowed/folder/)$" allow
    Order allow,deny
    Allow from env=allow
    Satisfy any

Make sure the path is absolute, so will probably start home/user/www etc. Make sure you have the trailing slash! (This could probably be very easily modified to have a relative directory)

Then, in the .htaccess file for the directory that I want to allow everyone to access, I have the single line:<br> Allow from all

This cleared it up for me, you may have to do some tinkering to get it to work properly on your server's configuration or to work with other .htaccess files you have in effect. Good luck!
