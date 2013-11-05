---
layout: post
heading: 'IE 9 For Developers'
categories: dev
---

There are some innovative features in IE 9 that I had previously been extremely excited about. These are mostly regarding the browser's integration with the operating system (especially Windows 7), which is something that Microsoft is in a unique position to provide in an efficient manner.

{% include images/block.html src="http://media.chris-alexander.co.uk/pictures/ie9.png" %}

Some of these features are enabled through a JavaScript interface *window.external*. While this was all well and good, I previously had concerns with this as I had not been made aware of a method of detecting whether or not the features were available in the browser the page was being rendered by. This clearly would cause problems on multiple browsers, and you can't just go around executing scripts for a single browser as this will cause errors in all the others. There is, however, a section on [the MSDN documentation for this browser feature](http://msdn.microsoft.com/en-us/library/gg131029(VS.85).aspx#detecting-features) which describes how to perform a test to see if the browser supports the Pinned Sites feature.

The more serious issue I had was with the descriptions for various Pinned Sites features which required the use of Meta tags with extremely long property names to describe to the browser the various images, URLs and options the developer wanted. My point was that there are other technologies available in the HTML 5 specification which would be more suited to this, such as the HTML manifest (which is already used to specify options for sites such as client-side file caching, storage and other bits and pieces). According to the team, they decided to use the meta tags as it would be error-free cross browser, and it is not unstable like they claim the manifest specification is which may risk breaking the feature if the spec changes.

Many thanks to my friend Giorgio from the IE 9 team who was able to clear up these issues and provide the Microsoft team's perspective on them.