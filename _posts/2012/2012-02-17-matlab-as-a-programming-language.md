---
layout: post
heading: 'Matlab as a programming language'
categories: uni
---

Matlab has long proclaimed itself as "The language of technical computing". However its language leaves a lot to be desired.

Having worked with Matlab on and off for a number of years now, I am going to try and explain what could be improved:

* Error messages - usually vague and not helpful, and often difficult to find explanations for what a particular error message actually means.
* Programming experience - largely just a text editor. Something like Intellisense would go a looooong way to improving the experience.
* JIT compiler - a just-in-time compiler (much like Eclipse does with Java) would benefit the above point too. As Matlab variables are just matrices, you have to work out what size they are for yourself. There's not even a way to annotate what size they should be so you don't have to look it up later.
* Proper functions and objects - Matlab's function definition system is backwards and annoying. The syntax is horrible too. Objects are (somehow) worse.
* Proper education support - this is something they could charge universities for and make a killing. However it will only work if the support is at the right level for students. If we're learning a particular technique, highly technical docs are all well and good, but could do with some background as to how the parameters relate to the base technique.