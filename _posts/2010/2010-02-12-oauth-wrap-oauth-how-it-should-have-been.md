---
layout: post
heading: 'OAuth WRAP'
subheading: 'OAuth how it should have been'
categories: dev
---

You may have read my recent (rather monolithic) post on [Getting Started with OAuth](/on-engineering/dev/demystifying-oauth/).

Web Resource Authorisation Protocol (WRAP) is a set of so-called "profiles" for OAuth, which contribute a substantial number of additional features as well as vast simplification of the bloated (yet finally secure) authentication mechanism.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/wrap.png" %}

WRAP is currently in the very early stages of development as a protocol specification. But that doesn't mean that it's not gaining traction already, and beginning to make an impact.

There are some pretty big names behind WRAP. Google, Microsoft, Yahoo!, and Facebook are all lending a hand. The WRAP Working Group's [list of subscribers](http://groups.google.com/group/oauth-wrap-wg/members) reads like a who's who of REST API pioneers.

Facebook also [recently announced](http://developers.facebook.com/news.php?blog=1&amp;story=350) that they have integrated WRAP into the FriendFeed API, so there is a real, live, running example of a WRAP server for clients to test against.

## What's New in WRAP?

There are a number of much-needed and exciting innovations in WRAP that have been a long time coming.

Keep It Simple, Stupid - the mantra by which we live, breathe (and code) at work - has finally been applied to OAuth. No more secret tokens / endless HTTP requests / complicated signature schemes.

Instead, your precious keys are protected by SSL requests to the server. So you redirect the user to the authorisation page with your consumer key and a callback URL. They return, providing a verification code. This verification code is then used in one simple HTTP request to grab the access token.

Then, to make a request, all you have to do is send that access token along with the request that you are making to the API - no complicated and crazy encryption and hashing required.

Genius!

## More on WRAP

For more on WRAP, check out the [official WRAP page](http://wiki.oauth.net/OAuth-WRAP) on OAuth.net, the [OAuth WRAP Working Group](http://groups.google.com/group/oauth-wrap-wg) mailing list.

Bob, lead developer at [Huddle](http://www.huddle.net), has also bee busy with WRAP. In fact, his team used it to win a competition at Microsoft.
