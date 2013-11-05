---
layout: post
heading: 'IE 9: Microsoft have blown it'
categories: microsoft
---

Today's #uktechdays coverage is sponsored by [Mobile Phone Checker](http://bit.ly/mpcca), helping you find the best mobile phone contract deals online.

I had high hopes for IE 9.

In fact, I was quite looking forward to it. The Platform Previews worked very well, and I was pleased that HTML 5 was finally at the forefront of the platform. Hardware acceleration was nice, the video situation wasn't great but I was prepared to let it slide, and everything seemed to be going better than expected.

Then the Beta landed. The user interface was something unexpected! Nice minimalist header, single box at the top, not too many buttons and some *really* nice features integrated with Windows 7. Now you could set up jump lists, make it so a tab can be pinned to the taskbar, and customise the theme of the browser when that pinned link is opened. You can tie in to Jump Lists; add custom buttons to the previews that popup from the taskbar; and a few other nifty little features.

But that's where the cool stops. Because despite Microsoft *finally* jumping on the standards bandwagon, providing standard APIs and implementations we might be able to rely on, I was then shown the code which performs all of the "cool" functionality I mentioned earlier. Abused Meta tags. Proprietary JavaScript APIs. Recommendations for using non-standard icon sizes.

It seems all of this stuff has been implemented in *the most hacky way possible*. Which is a nightmare. Out goes cross-browser compliance, out goes standard JavaScript APIs - Microsoft have invented their own little language extension and are going to force it on everybody. It reminds me of the "OpenXML format is 100% free and open", "So what does this tag contain, which is defined in the spec as ‘Contains a blob of binary data used for rendering a OneNote snippet' with no more information" debate when Office 2007 and OpenXML all happened.

That is just not on.

So my hope would have been that Microsoft used something more sensible, for example the HTML 5 Application Manifest *for which this kind of thing was designed* rather than the archaic and frankly incorrect abuse of Meta tags. I am also yet to see mention of a way to detect whether the browser supports the JavaScript calls (which are also disgustingly named) or not. Mmm, **compliant**. Not. 
