---
layout: post
heading: 'Building Robust JavaScript'
categories: dev
---

I absolutely adore writing JavaScript. Like many things with many people, I'm not very good at it and probably shouldn't be allowed anywhere near it, but I just can't get enough of doing it.

I was fortunate enough to spend about half of the past few days at work (while not testing a massive number of bug fixes) writing a big pile of JavaScript. You may have seen me present the TweetMeme Chrome Extension a few weeks ago now at the Chrome developer event in London.

I've been taking the opportunity to brush up on my JavaScript knowledge and techniques. One thing I have discovered is that building robust, reliable, bug-free JavaScript is a lot more difficult than in a lot of other languages.

I've lost count of how many times I've actually rebuilt this application - the code is mostly the same, but restructuring how it is called and the general structuring of operations inside functions has completely changed the face of the code.

The team at work are probably sick of me distributing updates now, as there are so many rebuilds to address concurrency, caching, memory use, library use, and all of these modifications have lead to precisely no new features. But the various restructurings did manage to increase stability, reduce bugs, improve consistency and reduce overhead and load.

And that's the magic of JavaScript - it's so flexible, easy to use (and easy to get wrong), and you can build so much awesome stuff with it. I think it has great prospects as the language of the next generation of client-side web interfaces.