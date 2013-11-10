---
layout: post
heading: 'Google Wave Maintenance Page'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/wave-maintenance.PNG
  hassmall: false
  showonpage: false
categories: dev
---

Google Wave was down when I got into the office today and I was initially startled to realise that their maintenance redirect was invalid.

It tries to redirect you to http//wave.google.com/maintenance/ - can you spot the missing bit? So Firefox decided to prepend the properly formatted http://, and of course this lead to a pretty nasty error as its an invalid URL.

When I did finally get to the landing page, I found a rather curious holding page that someone had clearly got far too carried away with in their 20% time...

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/10/wave-maintenance.PNG" %}
