---
layout: post
heading: 'Safe Browsing with the Google Safe Browsing API'
leader:
  image: http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/malware.png
  hassmall: false
  position: bottom right
  inverted: true
categories: dev
---

With the continued proliferation of malware and websites of malicious intent on the Internet, consumers are offered little if no help in protecting their computers.

There is, however, help at hand.

Google, not only the most popular search engine, but also the largest single repository of information about the internet (internet metadata, if you like), now provide developers with an advanced way of warning users about malicious content on the internet.

This post is an overview of the Google Safe Browsing API; what it is, why you should use it in your application, and how it can help your users.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/codelabslogo.png" %}

## <strong>Why use the Safe Browsing API?</strong>

The Safe Browsing API has a number of uses that would provide security and reassurance benefits to your application's users.

From Google, these include:

* Warn users before clicking on links that appear in your site when they lead to malware-infested pages.
* Prevent users from posting links to phishing pages from your site.
* Check a list of pages against Google's lists of suspected phishing and malware pages.

For example, if your site maintains a list of outbound links, or automatically generates stories and pages of content, then you could filter these links through the API to make sure they are not malicious in nature - this is especially useful on sites with user-submitted content.

## Current Deployments of the Safe Browsing API

If you use Firefox or Google Chrome, there's a chance you've already seen the Safe Browsing API in action.

Whenever you visit a URL that shows up on the list from Google, Firefox and Chrome will stop you visiting, and present a warning page, often requiring several clicks through warning messages and alerts in order to get past it.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/firefox_malware.png" %}

## Using the Safe Browsing API

The [Safe Browsing API](http://code.google.com/apis/safebrowsing/) is currently in public beta as part of Google Labs - so it's something they're still working on (and may change).

The delivery mechanism of the API is different to how other Google APIs work; however, this is for the better (as otherwise the load on Google's part would be unmanageable, even for them).

To access the API, you will need a key, which you can get for free from the [API page](http://code.google.com/apis/safebrowsing/key_signup.html). This is just to make sure you don't kill Google's servers because the list is quite large!

### API Workflow

There are a few more steps than usual required to use this API.

First of all, every 30 minutes or so, you download the updated malware and badware lists. This is done in a versioning way, so you specify the last version that you downloaded, and it gives you a diff, with entries to be added and removed.

Each entry consists of a single MD5 hash digest. When you have a URL that you would like to look up, you form a set of MD5 hashes of various parts of the URL. If one of those hashes appears in one of the blacklists, then you can tell your system that the URL should be treated with caution.

The reason the list is a set of MD5s is for the protection of the site's owners (in case you are identified as malware incorrectly), and also to stop spammers essentially getting a really long list of active malware sites. That would be *bad*.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/01/md5.png" %}

### The tricky bits

The tricky parts of this process are three-fold.

The storage of the list is the first hurdle that must be accomplished - this simply can't be a simple URL to hit to check against the blacklist. I would recommend a fast KV store to hold a "true" as value for each MD5 as the key - then if it does not exist or returns false, it is not blacklisted.

The other issue is ensuring that your maintenance is reliable and robust - one of the conditions of using the API is that you not only add new entries as they come in, but also remove ones that are no longer blacklisted. I've seen at least one occurrence where an innocent site was taken over, blacklisted, and then the owner found out and cleaned it up, and the site was removed from the blacklist - if you don't remove it on your site, I can bet the owner would not be so pleased with you.

The final problem is getting the URL canonicalisation algorithm correct. You have to canonicalise the URL in several ways before you generate the MD5s to look up, and the specification for this is complex and pretty confusing. Study it carefully, triple-check your implementation, and find some sites to test against to make sure that it is working correctly.

## Best Practices

Having "been there, done that" with the Safe Browsing API, here are a few tips that I would suggest to anyone looking to implement it in their system.

* If you're going to do it, do it properly. Half measures will hamper your user experience and defeat the point of the whole exercise.
* Be clear on your warnings. Google have [published some guidelines](http://code.google.com/apis/safebrowsing/developers_guide.html#UserWarnings) on this; follow them.
* Check, check, check, then check again your [URL canonicalisation](http://code.google.com/apis/safebrowsing/developers_guide.html#Canonicalization). That's something you don't want to get wrong!
* Make sure the lookup matches the specification of what you will be using it for - does the list need to be client or server side? Does it have to be fast or does offline processing mean that it doesn't have to be quite so snappy?

## Resources
* [The Safe Browsing API Google Code Page](http://code.google.com/apis/safebrowsing/)
* [Official Documentation](http://code.google.com/apis/safebrowsing/developers_guide.html)
* [Google Online Security Blog](http://googleonlinesecurity.blogspot.com/)
* [Safe Browsing API Mailing List / Google Group](http://groups.google.com/group/google-safe-browsing-api)
