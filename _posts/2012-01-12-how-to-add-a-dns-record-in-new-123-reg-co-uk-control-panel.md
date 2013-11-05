---
layout: post
heading: 'How to add a * DNS record in new 123-reg.co.uk control panel'
categories: life
---

123-reg.co.uk are a great registrar, but their new DNS control panel doesn't let you add "*" as a record. This is clearly stupid.

To fix it:

* Open up the page in Chrome, and open the inspector (right click anywhere, select "Inspect Element").
* Select the "Scripts" tab
* Select cp_dns.js from the dropdown at the top of the window
* Navigate to line 894
* It should say something like this: "if (OTT.validateForm(jQuery(this).parents("form"))) {"
* Change it to automatically validate the form
* Change line to: "if (true) {"
* Press Ctrl+S to save (possibly not necessary) then add your * record happily

Someone needs to fix their client-side validation...