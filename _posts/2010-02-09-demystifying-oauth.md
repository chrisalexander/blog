---
layout: post
heading: 'Demystifying OAuth'
categories: dev
---

OAuth is an often confusing protocol, that can be very difficult to get started with and nigh-on impossible to debug.

With that in mind, I set out to learn more about OAuth, why it's there, how it works, and what you can do with it.

Of course the best way to do this is to actually get developing. So I got my PHP out, fired up my favourite IDE, and got started.

Here's what I learnt, from the beginning, and it will hopefully save anyone else getting started with OAuth a bit of time and a lot of confusion.

## Step 1: Write a load of code

This isn't actually recommended or in any way necessary, but I got a bit carried away with this project. I was fed up of Zend and wanted quite a few other frameworks to just get out of my way, so I did the first logical thing and wrote my own MVC framework in PHP.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/01/code.png" %}

Yeah you're right, neither logical, recommended nor necessary... but I thought it had to be done for something else I was doing and it was better sooner than later.

The only reason I'm telling you this is that I went through and hacked up the OAuth library I'm going to recommend so that it would work well with the framework's autoloader. If you're using an autoloader you will probably have to do the same; just so you know!

## Step 1a: What is OAuth?!

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/01/oauth.png" %}

In simple terms, OAuth is a method of securely authorising and authenticating with external web services without the user having to give you their password.

Here's an example: the Twitter API.

The original way it worked was that any external service which wanted to tweet on behalf of a user (for example) had to obtain the user's Twitter Username and Password in order to authenticate with the Twitter API. Each time the service wanted to send a tweet, it would have to send the user's username and password.

Can anyone spot the security vulnerabilities here? There are more than I care to count.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/01/wrong.png" %}

The "new" way of doing it is to use OAuth. This way, the service "signs" the request securely, after the user has "authorised" the service on Twitter.com, but never actually given the service their password. Much better!

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/01/right.png" %}

## Step 1b: Find out how OAuth works

The overall goal here is to make OAuth extremely simple to use - as in 3 lines to do a request of any kind.

But in order to get to that stage, we need a certain level of understanding of the underlying OAuth mechanisms in order to get it to work and abstract successfully.

There is an *excellent* in-depth guide to OAuth for beginners [available here](http://hueniverse.com/oauth/). There's a lot of it, but if you have a couple of hours to spend getting a great foundation in the whole topic then that's a great place to go.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/My-Endpoints.png" %}

### Brief OAuth Overview

Here I'm going to have a go at explaining the OAuth workflow with how it should be working internally. Please don't develop anything off this, but it should give you an idea of where things should be happening.

The goal of OAuth is to provide a secure authentication mechanism. It does this by allowing the user to "authorise" services to use a particular API. When the service has been authorised, it can sign any requests to the API securely, and without needing the user's password.

The very first step is to set up your application on the API provider's website. This process will give you a *consumer key* and *consumer secret key*. These two keys are unique to your application, and the secret key *must* be kept securely - if you expose this to the public, literally anyone can pretend to be your application and hijack all the user accounts and worse!

The next step is to get the user to authorise your application.

To the user, this appears to be just them clicking on a link to be taken to the API provider's website, in order to authorise your app. But there is actually a lot more happening behind the scenes.

First up, you make a HTTP request behind the scenes to the API provider to ask for a* request token*. You then exchange this request token for an *access token* with another HTTP request. These two requests are done behind the scenes. When you have obtained this access token, you can provide the link to the user to go off to the provider's site and authorise you.

The user clicks this link, authorises your application, and is then redirected back to your application via the *OAuth Callback.* This callback also gives you some extra data, which you use to make one final HTTP request.

The final request contains data from your consumer keys, as well as the response data from when the user authorised your application. With this final request, you get the user's *token*, and *secret token*.

Now we finally have the user tokens, we can start signing requests using them to be dispatched to the API! Just before you send off each request, the OAuth system takes various defined parts of it, signs it using your public and private consumer and user tokens, and dispatches the signed request off to the API, which then validates the signature and responds with the data you requested.

Simple, eh!

## Step 2: Find a Library

The first lesson I learnt as soon as I started investigating the internals of OAuth was you are *never ever* going to implement it on your own.

Unless you have 2 solid working weeks to give over to it, and you somehow think you can do better than all the libraries that already exist, (and you are some kind of encryption ninja) then go wild and do it.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/encryptionninjas.png" %}

Otherwise, go find a library to use, *trust me!*

As my little project was in PHP, there are a few options. If you have access to your PHP installation, then you could try out the [OAuth module](http://uk3.php.net/oauth). Otherwise, I found another handy OAuth library that just uses cURL, which you can download the source [from here](http://github.com/abraham/twitteroauth/blob/master/twitteroauth/OAuth.php).

There are also loads of libraries for OAuth in other languages listed [on this page on OAuth.net](http://oauth.net/code/).

## Step 3: Find an example

So now we have our shiny OAuth library, by far the easiest way to get started is to get going with an example. For the library I listed earlier, I would check out [this implementation](http://github.com/abraham/twitteroauth) of the Twitter OAuth API.

The best approach to take is to work through the code along with a description of how OAuth works. This way you reinforce your understanding of the underlying process, while seeing how it is implemented with the library you are using.

## Step 4: Abstract

This one's kind of optional. I thought it was necessary for what I was doing (my OAuth interface is part of my framework) but you don't have to.

Abstraction comes with the usual benefits and disadvantages, but in this case it makes using the complicated OAuth process much more manageable in code that you are writing later.

Additionally, if you do it in a way that is re-usable, you can just plug in OAuth support to your future projects (which is, in part, the justification for the PHP framework).

## The Challenge

My current OAuth wrapper supports Twitter, LinkedIn, Foursquare and Brightkite in a single package. For each of them, it is 3 lines of code to use.

I think that if you can get OAuth working to this stage, then you probably have a pretty good understanding of it.

Can you do better?

(This snippet is to get the Authorisation URL to redirect the user to to begin authorisation)