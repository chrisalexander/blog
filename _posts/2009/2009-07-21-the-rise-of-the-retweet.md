---
layout: post
heading: 'The Rise Of The Retweet'
categories: social
---

Or: Why clicks are now null and void.

I saw a piece of code earlier on today that allowed the user to display a "Retweet" button on their blog; all good so far. But then, I looked a little closer, and it didn't actually count retweets; what it did do was count the number of clicks the link had had through [Bit.ly](http://bit.ly). There are many, many reasons why this is a bad idea, and here are a few of them.

### Suddenly, Click === Vote

This system allows a click of the bit.ly link to essentially count as a vote of approval to the link - much like a Digg, an Upvote on Reddit, or a Retweet on Tweetmeme, the click is your primary method of showing approval to the URL and the content it contains. This may be all well and good if your link was displayed in full with an excellent description of the content at its side. But this is Twitter we're dealing with, an entirely different beast. You don't know what people could write next to your link; and users have absolutely no ideas as to the validity of the link, or what it may contain at the other end, as all they see is bit.ly with a random hash of characters. It's like voting in a General Election where all the candidate's names are written backwards in [Ferengi](http://en.wikipedia.org/wiki/Ferengi) on rainbow-striped paper.

On the other hand, a Retweet symbolises this voting model much more effectively; the user has had the chance to read the content at the link, and it will require time to re-distribute the link to their followers; if they continuously post links that are boring / spam / offensive then they will loose followers and quickly garner the scorn of the community, so there is an incentive not to do it. This greatly raises the stakes when posting a link, and makes a retweet considerably more valuable than a click on a link.

### You're not tracking all the clicks anyway

So there are a few exceptions to what bit.ly count as clicks - Googlebot and the like. But I don't mean that: if you're hitting the Bitly API for the total number of clicks for a short URL, you're not getting all the clicks for the link you think you're pointing to. This is for a couple of technical reasons, which I will briefly explain as this: you only get the clicks for *that exact Bitly* (you can have more than one Bitly per URL), and Bitly does *absolutely no normalisation* on the URL - which is good, trust me - but this also means that http://www.chris-alexander.co.uk/ is not the same as http://www.chris-alexander.co.uk (note the trailing slash) so even if you grab the aggregate URL, there is absolutely no guarantee you're getting all the clicks for that particular URL.

### Bitly are not the rulers of the Universe

Sorry! There is just no way that you can claim that every single short URL to your page is a Bitly URL. So even if you have overcome the fact that users are voting for your page without reading the content and you're not even actually getting all the clicks from Bitly alone by two features of their API, you're still not catching the other 30% of shortening services used on Twitter today.

### What Clicks Are For

Is there actually a point to clicks then? Other than the obvious (obtaining a method of going to another page), clicks are a great way to measure how many people see your content, so you know whether your particular marketing ploy for that URL played well, or so you know how much you're over-charging your advertisers to thrust content in your users' faces.

But so far as garnering the popularity of the site, they're just about as useful as asking people to vote for songs in the Eurovision Song Contest by not telling them the phone number to call nor allowing them to ever see the entries (which is probably for the best, to be honest).

*These words are my own opinion and do not reflect the opinion of my employer or their affiliates, my colleagues, family, pets or sentient algorithms. If you don't like it, make beef at me in the comments.*