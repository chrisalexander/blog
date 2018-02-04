---
layout: post
heading: 'Suppress warning "Field is never assigned to, and will always have its default value null" when fields are populated by MEF'
categories: dev
---

MEF is a great framework for doing all kinds of cool things in .NET. However one thing that gets me quite often is that fields in classes that are composed by MEF using the [Import] label often generate warnings like the following:

This is a warning that is safe to ignore but looks bad on your automated builds when warnings come up. So it is easy to get rid of with the SuppressMessage decoration on the field, but it is nearly impossible to find the right documentation for it (Visual Studio helpfully does not include the identifying code in the error message when rendered in the UI, thanks guys). To suppress this particular message, use the decoration:

I also discovered a wonderful resource on MSDN (after literally hours of searching) which describes all the warnings and their codes so you can use them in such suppressions later on. [Here is the whole list of warning identifiers](https://web.archive.org/web/20171006235512/https://msdn.microsoft.com/en-us/library/dd380629.aspx), and here is the [specific one for CA1823](https://web.archive.org/web/20160121034548/https://msdn.microsoft.com/en-us/library/ms245042.aspx).

The unused event one is equally hard to find:

Hope this saves someone a few hours looking for the docs and the correct code.