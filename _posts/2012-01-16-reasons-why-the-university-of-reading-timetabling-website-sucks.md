---
layout: post
heading: 'Reasons why the University of Reading timetabling website sucks'
categories: life
---

I get annoyed at [this website](https://www.futuretimetable.reading.ac.uk) every year so I thought I'd write down the list to make myself feel better.

It requires both *https* and *www* components of the URL, and gives you a pretend Internet Explorer error message when you don't do it instead of redirecting you. **-5 internet points** for just being annoying

It authenticates through HTTP headers, except it returns HTTP 200 on *any* authentication, even if it isn't right - which means you have to re-authenticate through their form and have no opportunity to re-login. **-5 internet points** for failing to implement HTTP properly

It is pot luck what your username is - its either just your username, or sometimes it's prefixed with "rdg-home\", presumably the authentication domain. **-5 internet points** for being stupidly inconsistent

If you are forced to re-authenticate through their form and have to prefix with "rdg-home\", the form input is not long enough (only 15 characters, enforced through max-length) by default to accommodate a full username string. I presume laypeople just don't log on, but you can modify the form with the DOM inspector in your favourite (useful) browser. **-10 internet points** for being damned stupid and useless

The default options are useless. There's no "My timetable, this working week" button (so the weekends take you to the *next* week, not the *current* week which they do at the moment). The default layout is impossible to comprehend. Even the layout that is possible to comprehend uses popups to display information such as the room number, which don't work on touch-based devices at all. **-25 internet points** for being a total usability fail

There is no option to export your timetable in any form. I don't care even if its CSV, at least you can get the data out. I guess it would be too much to ask for a useful calendar format. **-25 internet points** for failing basic interoperability stuff

The website goes down the first day of term and the last Sunday before the start of term while countless freshers hammer it trying to figure out if they have to get up in the morning. **-10 internet points** for not scaling to your *predicted* user base, let alone "web scale".

Further complaints in comments please.