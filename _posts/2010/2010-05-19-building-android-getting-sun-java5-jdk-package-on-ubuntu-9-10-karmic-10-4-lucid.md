---
layout: post
heading: 'Building Android'
subheading: 'Getting sun-java5-jdk package on Ubuntu 9.10 Karmic / 10.4 Lucid'
categories: dev
---

I've been playing around with getting started building Android (I'd like to get 2.0 working on my [Joggler](http://yourfamily.o2.co.uk/o2familyjoggler/)). To build Android under Linux, you need the sun-java5-jdk package.

This is due to a conflict in the @Override command, which means you can't use the Java 6 JDK for this task.

Unfortunately the *sun-java5-jdk* package isn't available by default in the Karmic or Lucid repositories, so you need to grab it from somewhere else. To save you searching, here's the howto:

### 1. Enable the jaunty-updates multiverse repository

You can do this by adding a single line to your sources.list file.

First, open your sources.list with the command:

Then you can add the following line (making sure you comment - # - with why you added it) to the file:

Then you can save that and quit.

### 2. Refresh sources

You need to do an update to refresh your repository list then you're good to go:

### 3. Install package

And finally to install:

### 4. Continue process

Continue the process with the instructions [here](http://source.android.com).
