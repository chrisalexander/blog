---
layout: post
heading: 'Abusing PHP to your whim'
subheading: 'Private methods and properties'
categories: dev
---

I have recently been writing a lot of code (and open-sourcing it - see [here](https://github.com/chrisalexander/PYT), [here](https://github.com/chrisalexander/Decypher), [here](https://github.com/chrisalexander/BrainJS), [here](https://github.com/chrisalexander/English), [here](https://github.com/chrisalexander/Spine), [here](https://github.com/chrisalexander/libfreenect) / [here](https://github.com/Kodhus/Ariel), [here](https://github.com/Kodhus/Mo), [here](https://github.com/Kodhus/Mint)) and today came across a particular problem and a rather convenient solution provided by PHP's visibility rules for methods and properties of classes.

I am working on a PHP-based object mapper to help out loading and saving objects to one or more data stores - see [Mo](https://github.com/Kodhus/Mo). I was adding support for multi-loads, with datastores that can provide multiple results more optimally in a single query (for example, MySQL can select a set of items given a list of IDs). What I wanted to do was:

* Not use static methods to do this, like Object::multiLoad($ids) - nasty and impossible to test. Additionally the mappable objects define their mappers and mapping policies through methods, so this would be unworkable for retrieving that data.
* Not have to publicly (i.e. to the developer using the library) expose the object's load methodology (so they can't screw it up).

This is all well and good - the load() method is currently private, and therefore they can't get to it, but when the constructor calls it there's no problem. However, if you are doing a multiload and want to return an array of objects, you need to instantiate an object *and* pass it the data that you have already loaded through your convenient multiload query to the datastore.

Nuts, I thought.

So I looked up PHP's inheritance rules, and had no luck. But when I got on the [visibility section](http://www.php.net/manual/en/language.oop5.visibility.php) I found a little titbit about PHP that I didn't know before - an object of a given type may access the private methods and properties of an object of the same type. This is apparently because it already knows the definition of the methods etc. so it can just run them on it - seems a bit like someone was lazy and that was a "feature" that emerged, but we'll go with that!

This means you can do black magic such as this, which also conveniently solves my problem:

{% gist 836105 %}
