---
layout: post
heading: 'Creating Android Apps with Google App Inventor'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/start.png
  hassmall: false
  showonpage: false
categories: dev
---

Earlier this month [Google announced App Inventor](http://mashable.com/2010/07/12/google-app-inventor/), an easy way for anyone to get started on building Android applications. Earlier this week I got myself an invite, and headed over to see what's what.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/logo.png" %}

App Inventor is in its very early stages. It's a closed beta, with invites going out to people when Google have the capacity and find suitable people. This shows, as there are still some clunky parts and limitations that will have to be overcome before release, but other than that it seems like an excellent preview of what's to come.

The whole idea of App Inventor is that it makes it easy for anyone to create Android apps. It does this through a number of innovative developments in the mobile app space. For example, all of the UI and layout is done inside a web app. This then launches a Java client on your machine (which it communicates with) which provides you with all of the methods for building application logic. Then the Java client downloads the app on to your phone where you can give it a play.

The UI builder is extremely intuitive (especially considering some of Google's previous interfaces) and allows for flexible layout of various elements on the screen. Unfortunately the entire builder is limited to one "screen" (activity) of an application at the moment (if you don't know what activities are in the context of Android apps, then [check this help page out](http://developer.android.com/guide/topics/fundamentals.html#acttask)) so you can't do that much, but you can still make it pretty flexible. It's easy to edit properties of the UI elements, and launch the Blocks Java app to get the logic going.

The logic builder is also fairly intuitive, but could do with a few UX improvements to help people get started. Logic is mostly event based, and the events are all intuitive to discover. There are a few useful ones missing but hopefully they'll arrive over time. Adding a series of tasks and values to a logic block is simple, but requires an understanding of logic and a programming mind to get how to do it. While App Inventor is simple, it doesn't cover you if you have absolutely no programming knowledge at all.

Finally dumping the app on to your Android phone is pretty simple, but may require some command line trickery in Windows if your phone isn't supported out-of-the-box (the client side stuff is still a little rough-and-ready).

Overall though, I think App Inventor will be a great tool for teaching programming and the students being able to see their results directly on their phones. With a bit more polish it will be great for amateurs to knock together a quick app to solve their given problem. I managed to knock together a rudimentary tweeting application in just a couple of minutes. Check out the screenshots of building it and running it on the phone below.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/start.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/button.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/block_canvas.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/twitter_login.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/full_twitter.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/full_twitter_blocks.png" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/STA60002.jpg" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/STA60003.jpg" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/STA60004.jpg" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/STA60005.jpg" %}

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/08/logo.png" %}
