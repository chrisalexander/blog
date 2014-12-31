---
layout: post
heading: 'New in ASP .NET MVC 2'
categories: dev
---

I was recently at an all-day event with Scott Guthrie from Microsoft - [read about the event here](/on-engineering/dev/notes-from-the-guathon/). Here I collect what he had to say about what's new in ASP .NET MVC 2.

The final post in this series from the event, it is another collection of random notes that I made during the day - hopefully it makes some kind of sense and is somewhat useful!

### Making use of Dynamic

With the "dynamic" datatype, Microsoft have somehow managed to force loose typing into a strongly typed language - I think when .NET sees the keyword "dynamic" it just gives up all hope and cowers in a corner while you do what you want with the variable.

Anyway, in MVC 2 the models are dynamic by default - meaning you have to enforce strong typing if you want it when passed through to the view. Fairly small and simple to change, but makes a big difference in some situations.

### HTML Helpers

I find these really cool. Pass an object through to an HTML helper and you can ask it to render you the details out on the page, or just render out a form to allow you to change the values of its variables.

Seems simple, but for me this solves one of the main reasons I don't use .NET for web apps on a day to day basis - it is great for building robust, reliable sites, but only if you have the time to build them. When I need something prototyped quickly, that is the last thing I want to be spending time on - I just want something out there and working. Now with these helpers, I spend less time worrying and more time prototyping.

You can also add attributes to the variables in a class to determine whether or not or how it is displayed in the form - for example you can set its display name with DisplayName("), set the datatype it is rendered as with DataType(DataType.xxx) and hide it from the form with ScaffoldColumn(false).

There is also ValidationMethodFor, a helper which renders a validation failure either directly in the client side or from a POST to the server - extremely useful and time saving!

### Overloading methods

MVC just got a little more REST-ful. You can overload a Controller method in such a way that one of the overloads is called in response to a GET request, and another is called in response to a POST. This makes form handling super-easy, and you can POST from the page returned from the GET request to the same URL and everything will work beautifully. Simples?

### More

I think that covers just about all of the interesting notes I took at the event, as ever there is more and more and more content [on Scott's blog](http://weblogs.asp.net/Scottgu/).