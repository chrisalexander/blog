---
layout: post
heading: 'Automated Testing with Visual Studio'
categories: huddle
---

Yesterday at Huddle we had a very interesting presentation illustrating automated testing techniques available to the engineers for testing the site to make sure it works.

The first of these was the testing tool built in to Visual Studio. By using the web test feature it is a much simplified process to input test values into websites and check that the application is behaving as expected. This can range from anything to seeing if a submitted form returns the expected error message when an incorrect value is entered to ensuring that certain elements are present on a page in a certain state.

This is only so good, however. Visual Studio is unable to cope with situations such as an error message is dynamically made visible (e.g. With Javascript), as this error message exists on the page when there is no error, it is hidden and then made visible when an error occurs. When this situation occurs there is a very useful Firefox addon that can be used, called Selenium. This tool uses simple HTML markup tables to specify the tests (so it can be easily outputted from a program and configured there) and features plugins to enable C# integration (so you can use their classes to test from there) as well as many other things. This provides numerous advantages over the Visual Studio suite but once again has some limitations.

Coupled with tools such as Firebug for Firefox, we rapidly build up a test suite that can be used for one-off tests as well as scheduling advanced tests to drill down through the entire site and test to ensure any updates dont cause unexpected behaviour before release.