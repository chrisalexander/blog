---
layout: post
heading: Fix missing calendar items on Android 4′s Calendar
categories: ['google', 'android']
---

I was playing around with Calendar on my phone the other day and realised whole calendars had gone missing from my schedule. I have 4 Google accounts with at least 4 calendars each in them to keep events organised, and clearly this was a big problem (one that went missing tells me when my bills are due, so quite a big issue).

Following a lack of working fixes online, I have come up with this process for completely nuking just the Calendars on the device so that it fixes it itself. Follow the steps in the screenshots or in bullet points below.

* Open Settings. The easiest route to this on any device is to open Notifications and hit the little Settings icon.
* Select Apps from the menu
* You need to perform this action both on the Calendar and Calendar Storage apps. You will find these listed under the “All” tab (third one on the top bar).
* Open Calendar from the menu. Hit Force stop (accept any popups). Wait, then when it’s done, hit Clear data. Observe that all the storages go to 0B (zero bytes).
* Repeat above procedure immediately for Calendar Storage.
* Go back to Settings and select Accounts & sync, then check your Google accounts are doing Calendar sync. This is only really to give it a minute to download the calendars.
* Open up the Calendar app from a widget or from the menu. You should see this screen. Select Not now, as you already have all your accounts set up.
* Calendars gradually appear (may take a few seconds to start downloading them). This is madness, so let’s clean it up. Select which calendars you want displayed from the menu.
* Much better! All fixed.

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-13-41.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-13-51.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-14-02.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-14-20.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-14-34.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-15-12.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-15-30.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-15-52.png" %}

{% include images/block.html src="http://chris-alexander.co.uk/wp-content/uploads/2012/03/Screenshot_2012-03-14-17-16-42.png" %}
