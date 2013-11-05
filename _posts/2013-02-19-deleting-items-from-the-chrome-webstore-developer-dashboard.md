---
layout: post
heading: 'Deleting items from the Chrome Webstore developer dashboard'
categories: google
---

There is no button to delete items from the Chrome Webstore developer dashboard. This is for good reason - if you accidentally use the same GUID again, a lot of things will break according to Googlers. However, I have been testing deploying a Chrome packaged app there (which is experimental at the moment) and it broke quite a few times. Thus I ended up with a lot of dead items. While when they are unpublished they don't count towards your 20 app limit, it is still the case that they get in the way somewhat and it's difficult to tell what is what.

It is possible to delete them, but please really be sure you know what you are doing. If you're not confident you understand the possible implications of doing this then please don't do it!

To do the delete, open the dashboard, and open the Chrome developer tools (Ctrl + Shift + J). Your app ID is the string that is on the end of the URL that you get when you click "Edit" next to it. Type in the console:

    cxDeleteItem('id')

Where you replace *id* with the ID of the app you want to delete. You'll get a confirm box to make sure you know what you're doing, then your app will be finally removed.
