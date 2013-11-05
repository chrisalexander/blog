---
layout: post
heading: 'Get random numbers with jQuery'
categories: dev
---

I often make comedy of the thousands of StackOverflow questions along the lines of "How do I add to an array with jQuery?" and so on. Well, I was working with some Chrome Apps I'm putting together and needed some random numbers. So obviously I wrote a jQuery plugin to do it.

Obviously I am well aware of Math.random(), but you can use the API on [random.org](http://random.org) to get random numbers generated through atmospheric noise measurements. So to build a bit of a proof-of-concept of adapting features for offline and online use, I built a jQuery plugin that uses the random.org API when online, and falls back to Math.random() when offline.

The plugin is hosted over [on github](https://github.com/chrisalexander/random.jquery.js), you can view the [readme](https://github.com/chrisalexander/random.jquery.js/blob/master/README.md) for all of the documentation.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2013/03/js-300x271.jpg" %}