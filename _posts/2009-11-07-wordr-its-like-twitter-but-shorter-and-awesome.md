---
layout: post
heading: 'Wordr: Its like Twitter, but shorter. And awesome.'
categories: dev
---

Having trouble getting your thoughts into 140 characters? Try getting them into a word.

That is the principle behind [Wordr](http://wordr.org), a service I came across recently and pretty much instantly fell for.

Yeah yeah, "It's just another Twitter clone" I hear you cry. And you'd be right, it unashamedly admits this on its homepage. Its a very simple one at that, featuring just the bare-bones to get the service up and running - it seems the backend is progressing quite nicely, but I think their frontend could do with some work, as they (ironically) confirmed [in a tweet](http://twitter.com/wordr/status/5449101021).

What I love about Wordr is that it distils the art of communication down to the finest nuggets - a single word. Well, 28 characters to be precise, the length of [antidisestablishmentarianism](http://wordr.org/words/antidisestablishmentarianism), and with an optional question or exclamation mark at the end. No spaces, no hyphens, and you get a very cheeky message when you try and use an underscore!

{% include images/block.html src="http://media.chris-alexander.co.uk/1257/underscore" %}

To be honest, I'm not quite sure exactly why I am drawn to Wordr. Sure it's simple, and very plain at the moment, and its main selling point is that you can't do very much with it (but look where that got Twitter!). I've come up with a few ideas on how Wordr can improve.

{% include images/block.html src="http://media.chris-alexander.co.uk/1257/wordr" %}

## Links

Tricky when you only have one word. But I think it should be done like "replies" are done - the username you're replying to obviously can't count as your word. How about an extra field where you can stick in a URL.

It's not that much work to add some cool stuff on to this too. Why not follow the link, provide the full URL (something even Twitter doesn't do) for people to view (and therefore trust), and maybe a title and snippet of content? Then you can use your precious word to aptly and succinctly describe the link you're adding.

## ReLinkr

How about the ability to re-post someone's link that they have just added - the system can take over the reposting and attribution bits.

While you're at it, what about synonyms? On Twitter people like to retweet others and add their own comments. Why not let users post a "synonym" - something they consider to be the same or of similar meaning to the original word, but in a new Word (pointing back to the original post, of course - you could even chain them into a series of synonyms). This could open some fun possibilities - I can imagine many scenarios where this would be a good laugh.

## API

We need to get at this data! Especially if there are links in it. It seems to me, from the views that are available on the site (such as word lists, who sent each word, who you follow etc.), that they have a very robust data store in the backend which can not only handle lots of traffic but also handle it very flexibly (we'll see how it scales, though). That data would be a gold mine for external developers, and I'm sure that API usage would take off.

## UI

I've already mentioned this needs a bit of an overhaul, and apparently its in the works. As I said, there is so much potential here, and a great UI (and hopefully something different to what Twitter have done) would really enhance that.

{% include images/block.html src="http://media.chris-alexander.co.uk/1257/words" %}

## Conclusion

I think I may have figured out why I like Wordr so much. Other than it is very nice and fun to use, I think it is the intrigue of only being able to write so much at a time. Some of the tweets I enjoy digesting the most are those that contain fewer words, and are therefore more cryptic. I find with a single word, my imagination can run wild as to what that could mean, and I quite enjoy that.

If you want to check out Wordr, [head over to their site](http://wordr.org) and sign in with your Twitter account (also, ironically).