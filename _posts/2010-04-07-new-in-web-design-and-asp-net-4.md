---
layout: post
heading: 'New in Web Design and ASP .NET 4'
categories: dev
---

I was recently at an all-day event with Scott Guthrie from Microsoft - [read about the event here](http://www.chris-alexander.co.uk/3091). Here I collect what he had to say about what's new in Visual Studio's web design tools, and ASP .NET 4.

### WebForms Control Updates

The ASP .NET WebForms controls have been updated to generate much cleaner, more modern markup.

For example, a menu used to be a table formatted with inline styles. Now it has been transformed into a &lt;ul&gt; (unordered list) and with no more inline styles - designers should be happy with this being considerably easier to work with!

### ViewState

ViewState is probably one of the biggest reasons why I would not develop a website in ASP .NET.

Essentially ViewState is a variable that is set by the server, and dispatched off from the client with each request. My three biggest pain points is that they were trying to force state behaviour into a stateless interaction (the client and the server), that the ViewState got so massive (I have seen - no joke - 98,000+ character long ViewState strings), and that these strings were also sent with asynchronous requests. This meant your quick little async call to update some data turned into a mammoth 100k request because you had a tiny piece of data and a massive ViewState that needed updating for it. A shocker.

Fortunately now, ViewState has been greatly reduced in size, and you can turn it off at the page and application level - you can then re-enable it on certain controls. Personally I'll be glad to be rid of the damn thing completely.

### URL Routing Improvements

As they were working on MVC, I think Microsoft finally realised that URLs that ASP .NET throws out are far from SEO friendly, and they could be much improved.

Now there is a mapping engine, which allows you to write regular expressions to rewrite SEO-friendly URLs (like */category/news*) to ones that work with your application (e.g. */category.aspx?category=news*). Bit of a kludge, but something none the less.

You can also do URL re-writing in IIS in a similar way to how *.htaccess* works on Apache. What's cool about this is that you can also rewrite the outgoing HTML so the links all point back to the SEO-friendly versions of the page's URLs, rather than the old style your code is generating.

### More SEO Improvements

The SEO Toolkit is now part of IIS and can be run against any website. This allows you to analyse how your website performs in the view of search engines, and suggests ways of improving.

### jQuery

The jQuery JavaScript library now comes built in to ASP .NET (and MVC) projects. This allows you to more easily integrate it with your solution, and make better websites through use of it.

Scott also announced that Microsoft are now committing improvements and new features back to jQuery, and that it is available on the Microsoft CDNs for any website to improve its page load time. Find out more about how to use it, and why this is a good idea, [over on Scott's blog](http://weblogs.asp.net/scottgu/archive/2009/09/15/announcing-the-microsoft-ajax-cdn.aspx).