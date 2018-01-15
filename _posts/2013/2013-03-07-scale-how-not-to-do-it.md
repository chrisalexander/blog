---
layout: post
heading: 'Scale - how not to do it'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2013/03/meteor.jpg
  hassmall: false
  showonpage: false
  inverted: true
categories: web
---

Oh dear, EA.

Their decision to make the latest SimCity game tied to their servers was a dubious one at best. But when the game won't function because you can't handle the load of everyone trying to play it, then you have really screwed up. It's now got to the point where over 700 of 800+ reviews of the game on Amazon are 1 star, and Amazon even stopped selling the download version because [nobody could connect](http://www.geek.com/articles/games/following-800-poor-reviews-amazon-stops-selling-download-copies-of-simcity-2013037/).

<!-- Replace missing image from http://media.chris-alexander.co.uk/wp-content/uploads/2013/03/meteor.jpg -->

Perhaps the most concerning points about EA's statement is that they will ease load by bringing online more servers in "the next 2 days", and they are being hampered by "server architecture issues".

This sounds like two very very serious problems for thousands of clients who are dependent on the system. Architecture issues could be quite a few different things but it sounds like the application servers or something they rely on just doesn't scale properly - this could go all the way back to the design stage of the software. And 2 days to bring online more servers?!

At import.io we have worked very hard to make our architecture reliable, resilient and scalable. We're by no means there yet - but our young startup can not only start and stop servers with a couple of clicks (just about anyone can through the AWS console, let's be honest), but we have multiple applications automatically forming clusters based on the resources that are allocated to them, and the clusters also manage load by scaling up and down the number of machines they are run on depending on key load metrics.

Perhaps EA should look into scaling out with AWS (and doing their application design properly) next time?
