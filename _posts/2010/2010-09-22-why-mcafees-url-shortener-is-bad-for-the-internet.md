---
layout: post
heading: 'Why the McAfee URL shortener is bad for the internet'
categories: twitter
---

Or: Why McAfee's URL shortener is *worse for the internet than all the other URL shorteners*.

Yesterday, under the pretence of something about making everything secure, McAfee went and [launched the beta](http://techcrunch.com/2010/09/21/mcafee-url-shortener/) of its own URL shortner, [McAf.ee](http://McAf.ee). Here I am going to explain why this is a terrible idea for numerous reasons.

## 1. It's no more secure than anything else

The McAf.ee tool is nothing more than a branding and marketing exercise for its Global Threat Intelligence system. There are security systems implemented in many of the major URL shorteners already in existence, with the inclusion of our own [Retwt.me](http://web.archive.org/web/20101120090811/http://retwt.me/-/) (I should know, I implemented it). For simply detecting links that are spam, the [Google Safe Browsing API](http://code.google.com/apis/safebrowsing/) is used by many providers. It updates in minutes, is authoritative, and secure - because this is the list of URLs that Google itself blacklists against. I doubt that McAfee can offer any real-world security on top of that that is actually any value to consumers.

If you're interested, I've written about the Safe Browsing API before (#1756).

## 2. It provides no value to its users

Other than the faux-feature of the security, it actually doesn't provide anything to its users - that includes the people shortening as well as the people who click the links. There is no click tracking or analytics for the person who created the link (even though that's a useless metric anyway - something else I've written about before (#282)), and the only thing the end user gets is the knowledge that they're going to have a massive McAfee logo plastered above the page they're going to (usually with a big green tick).

## 3. It utterly and completely breaks the Internet

Automated systems work with URL shorteners on a day-in, day-out basis. For example, Twitter apps crawl URLs all the time, and this requires following the redirects in the short URLs. Usually this is easy: most URL shorteners use an HTTP-standard response code and Location header (HTTP 301 and HTTP 302 are the common response codes) to let automated systems know that they need to follow the links. Sometimes, URL shorteners "frame" the content (bad idea anyway), but usually they provide an alternate link in the industry standard way in the page head section which automated systems can follow but normal users will not go to.

However, McAfee's shortener implements none of these standards. In fact, it loads up an IFrame with the page in it, which is no use to anybody.

As a final few spanners in the works, they don't have valid page markup, use tables for layout in their heading, and haven't followed up for my request for comment from their Twitter account.
