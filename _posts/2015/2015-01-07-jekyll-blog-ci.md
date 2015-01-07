---
layout: post
heading: 'Continuous integration of Jekyll blogs'
subheading: 'Travis CI for a free solution'
categories: jekyll
---

I have been working on my site over the New Year break, making a few tweaks and improving bits and pieces. One of the things that I did was to give [Travis CI](https://travis-ci.org/) a go and set up continuous integration.

Jekyll has [quite a good tutorial](http://jekyllrb.com/docs/continuous-integration/) on its site for setting up Travis, but if you are starting with a Plain Old Jekyll blog (no Ruby in it at all) there are a few bits and pieces that need to happen too. After getting knee-deep in Ruby gem hell and escaping the other side largely unscathed, here are some tips for non-Rubyists on getting it set up.

### Gemfile

First of all you will need a Gemfile, this is the one you need to get their example build working:

{% gist 25b67f94e3b82a94303c %}

### Jekyll excludes

You're also going to want to increase the files you exclude from your Jekyll build. I am using this exclude list now:

{% gist 969a00aa74b04039a9de %}

### Results

You can see the output of the hard work on [Travis CI](https://travis-ci.org/chrisalexander/blog). Don't forget to embed the badge on your README so you can see how the build is!
