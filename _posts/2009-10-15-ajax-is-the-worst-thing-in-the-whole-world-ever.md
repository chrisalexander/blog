---
layout: post
heading: 'AJAX is the worst thing in the whole world'
subheading: 'Ever.'
categories: dev
---

Yep, there we go, I said it. There is nothing that I hate more than AJAX.

Not very "Web 2.0″ of me, is it? Well, not exactly.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/funny-pictures-never-trust-a-feline-technician.jpg" %}

That's because this rant isn't about asynchronous Javascript and XML. This is about people who use AJAX interchangeably with "Javascript", who think that AJAX means their website looks good, and who think that AJAX should be used for every single thing on their site.

Now don't get me wrong, asynchronously loading content in some cases can be absolutely fantastic, a brilliant way of loading something that may slow your page down, doing some slick stuff (see my recent Google Wave post) and generally making bits of your site run smoother, for example by only displaying processing-heavy content from the server when it is needed.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/funny-pictures-cat-teaches-you-the-internet.jpg" %}

Take for example my blog's homepage. On the right you'll see a list of a few of my recent tweets from my Twitter account @chris_alexander. Now there's a 95% chance you didn't realise that these were loaded asynchronously - a separate HTTP request is made once this page's DOM has loaded to get the content and add it to that section of the site. The reason you probably didn't notice is that 95% of the time it's served out of memcache, so the delay is pretty much how long it takes to get it down the internet pipes. But for the other 5% of the time, it can sometimes take a little while to get that content out of Twitter and processed by the PHP, which would drastically slow down the loading time of this page, and make it a nightmare for me to try and keep visitors on the site. When the cache needs updating you'll probably notice the tweets take a second or two (at most) to load after everything else has appeared.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/funny-pictures-cat-computer-popup.jpg" %}

There are some things asynchronous HTTP requests shouldn't be used for, for example. Loading entire page contents, swapping out all the content, there are a million one things that would be completely terrible things to do with asynchronous HTTP.

There are also things that definitely aren't AJAX, and these are often very obvious and leaves the person using the term feeling really special that they used "AJAX", and the person who knows better thinking they're a bit silly really. A good example from @nicktelford is that you use the term AJAX while actually using Json to transfer data.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/funny-pictures-the-blue-screen-of-death-claims-another-victim.jpg" %}

So what was the point of this post? First of all, to have a bit of a vent about people who use the term AJAX as a synonym for Javascript, loading images in the background, animating bits of their website, and just about anything that isn't AJAX. It will hopefully also help a few people out who maybe don't know what AJAX is, who want to find out where's best to use it, and what it really is good for. An alternative to AJAX in the incorrect cases would be something like an Asynchronous HTTP request. A mouthful, but definitely less annoying.
