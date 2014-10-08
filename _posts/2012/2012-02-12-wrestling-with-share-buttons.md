---
layout: post
heading: 'Wrestling with share buttons'
categories: twitter
---

New blog design means new sharing. New sharing means fiddling around with code provided by the platform providers - some of which is (vastly) better than others.

Due to constraints in the design, buttons may need to be reloaded on the page. For a "single" page with one post, this doesn't matter. However, I wanted share to work on pages with multiple posts, such as the homepage. Due to the design (in the modal popup) the buttons would have to be regenerated depending on which share button was clicked. Easy enough to do with the data, but what about the buttons themselves?

This may seem overly complex but it has a number of advantages. The platform providers get less data about users by the buttons being rendered on-demand. It also means the page loads quicker, and we can load up the buttons while the fancy modal animation is happening, resulting in a much better experience for users.

LinkedIn's is the worst button in this regard. You have to load the same two scripts to get it to render a button each time. One of these scripts binds itself to window.IN, and won't let you load it twice unless you unset this in between. Bit impractical. There is also no Iframe implementation which could work around this problem.

Facebook and Twitter both have JavaScript implementations, but these don't work when you try and re-render them. Therefore I used the Iframe implementations. Unfortunately the Twitter button seems to ignore some of its parameters in the Iframe mode (such as the large button size, despite their docs saying otherwise). Both of these result in an experience that is less than perfect - the JS implementations give you nice modal popups, whereas the Iframes generate popup windows. Fairly easy to re-render though.

The Google +1 button is by far the best code. You only need load one script on page load, then you can call a global function to re-render buttons at any time. So you simply need to drop a new element and then call the function to get it rendered (very quickly, as a matter of fact) and you're done.

+1, Facebook and LinkedIn all support extra information from pages for their posting. Facebook and LinkedIn both use OpenGraph, which is reasonable as it only uses meta tags. LinkedIn is a bit picky about thumbnail size but not too bad. +1 uses Schema.org, which requires a bit more effort and some more elements (you also have to modify the HTML opening tag) but it's also fairly easy to implement. Twitter's share button doesn't do any of this and accepts parameters into the Iframe, which seems ok but it doesn't automatically shorten the text to the right length of the tweet for you which is a bit annoying. LinkedIn seems to have some problems picking up OpenGraph data from the share button too, if it hasn't been crawled before - it just doesn't populate any data in the popup.

All in all, a relatively painful experience for what should have been as simple as what you have to do for the +1 button four times over.