---
layout: post
heading: 'Chrome to Phone now available for Froyo users'
categories: google
---

Remember that awesome demo done on-stage at Google IO's day 2 keynote? (If not, I embedded it below).

They showed off Froyo's data push system by having a Chrome extension, that when clicked, opened the same web page you were viewing on your Android phone.

Now, you can go download the application to your phone, and install the Chrome extension, and everything just works!

<!-- Replace missing image from http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/chrome5.png -->

The system uses a service built on the Google App Engine. The Chrome extension makes a request to that service, telling it what page you're viewing and what Google account you're logged in with.

The App Engine site then posts this off to the Google push servers, which nudge it down to your phone, which then fires up the application you install and starts the browser accordingly!

To find out more about the project, you can head over to the [Google Code project](http://code.google.com/p/chrometophone/), or read up on it at [TechCrunch](http://techcrunch.com/2010/05/23/chrome-to-android-push/).

But the simple way to get started is to download the extension here, then zap the QR code below on your phone, and you're pretty much there!

{% include images/block.html src="https://chart.apis.google.com/chart?chs=150x150&amp;cht=qr&amp;chl=http://chrometophone.googlecode.com/files/chrometophone-android.apk&amp;chld=L|1&amp;choe=UTF-8" %}
