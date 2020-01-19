---
layout: post
heading: 'Quick tip: Unit testing Universal portable libraries'
subheading: 'Taking Windows 8 Universal app libraries and getting them tested'
leader:
 image: https://camediahost.github.io/pictures/win8dev/select.png
 hassmall: false
 showonpage: false
categories: windows
---

Today I started playing around with a Windows 8 Universal application. These apps are designed to work across multiple platforms, specifically Windows 8 desktop (what used to be known as Metro apps) and Windows Phone 8.

It does this by providing projects which build separately for phone and desktop, then providing a shared library which can contain UI elements and is then compiled separately for each platform and included in the application.

My tendency is to keep that default shared project just for UI components which are to be shared between the two platforms, I prefer to keep my other libraries in separate portable class library projects which can then target both platforms.

Today I was trying to write some unit tests for one of these such libraries and bumped into a little issue which didn't take much to resolve but seemed to cause some confusion when I was looking at what other people had written about it online.

If you are writing unit tests then you will probably want to run them with the Visual Studio test runner, or at least just on your desktop. This is easy enough for standard class libraries and it Just Works. But for portable class libraries designed to work with Universal applications, it doesn't by default. Have no fear, it is easy enough to get going.

First, on your Universal portable class library (for want of something shorter to call it) you just need to edit the project settings and enable targeting the .NET framework. I just selected the latest one I happened to have installed as I am just trying this out, but make sure you pick the right one for the situation you are in:

{% include images/center.html src="https://camediahost.github.io/pictures/win8dev/select.png" alt="Select the .NET framework to use" %}

Once you have done that, edit the properties on your unit test project and check it is targeting the same .NET framework (mine wasn't by default but again your situation will probably be different). And you're done!

{% include images/center.html src="https://camediahost.github.io/pictures/win8dev/target.png" alt="Choose the .NET target platform" %}
