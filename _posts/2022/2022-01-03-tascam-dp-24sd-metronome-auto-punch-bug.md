---
layout: post
heading: 'Metronome bug with Auto-Punch on Tascam DP-24SD'
categories: music
---

If you have seen the recent posts [here](/on-engineering/music/advent-of-carols/) and [here](/on-engineering/music/coventry-carol/) you will know we recently bought a Tascam DP-24SD for some home recording and have been making some (what we think is) good stuff with it.

However I have just had a [Wisdom of the Ancients](https://xkcd.com/979/) moment when I discovered [this forum post](https://homerecording.com/bbs/threads/tascam-dp-24sd-metronome-bug.402325/) which very accurately described a bug we have found in the device.

I will attempt to explain it here as well as the workaround we have found so far, in the hope that some visitor in the future benefits from it, and maybe one day Tascam will release a fix for it.

The issue is when you are using auto-punch with the metronome feature enabled. In some seemingly random situations, the device will stop playing the metronome when you play or record with auto-punch enabled. This means you don't know when to come in or if you're in time!

This appears to be associated with specific timecodes in the files we have had it on. Most often when we encounter the issue, we simply use the Jog Play feature to jog the IN point forwards or backwards one click (0.01 seconds I believe) and then the metronome typically starts working OK from that point. Not an ideal workaround if you have a specific point to cue in on, but this at least allows you to get most of the way there.

We have also found that when we have the BAR DISPLAY feature turned on, i.e. the main clock is ticking beats rather than seconds, using the jog wheel to go exactly to a beat point (rather than in between) has never (yet) triggered the bug, so this may be another option.

No concrete solution yet, but hopefully this helps someone out there...