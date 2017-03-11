[![Build Status](https://travis-ci.org/chrisalexander/blog.svg?branch=gh-pages)](https://travis-ci.org/chrisalexander/blog)

## Writing posts

### YAML front matter

Complete example:

    ---
    layout: post
    heading: 'Creating Memrise courses'
    leader:
     image: http://media.chris-alexander.co.uk/pictures/memrise/counties.png
     hassmall: false
     showonpage: false
    categories: learning
    ---

#### Layout

The layout of the page. Choose from "post" for a blog post (with or without leader) or "image" for an image post (no footer on this page either).

#### Heading

The page title, inserted at the top of the post if you choose "post" layout.

#### Subheading

The page subheading, put underneath the heading for you if specified.

#### Leader

An object specifying the page leader, if desired.

* image - URl of the image to show as the leader
* inverted - set to true to invert the colours from black text on the image to white text
* position - the position of the text on the image. Choose from top, left, bottom, right, top left, top right, bottom left, bottom right. Leave blank for the middle
* hidetext - set to true to make the text auto-hide as you scroll down on post pages, and to make the text and home link disappear if you stop interacting on image pages.
* hassmall - set explicitly to false to ensure it doesn't try and use a "small" image for leaders
* showonpage - set explicitly to false to only use the image on the listings, not at the top of the post

### Post content

Write post content with normal markdown. Here are some embedding tricks:

#### Images

An image in the center of the page with the given src:

    {% include images/center.html src="https://docs.google.com/uc?id=0B6Hlcpe0LOWKYnJUNnVYbkVSdjg" %}

A left-aligned image:

    {% include images/left.html src="http://placekitten.com/g/500/800" %}

A right-aligned image:

    {% include images/right.html src="http://placekitten.com/g/400/400" %}

An image which expands to the full width of the page (may be >1 page high):

    {% include images/max.html src="http://placekitten.com/g/1400/600" %}

A block image which sits in the middle of the page:

    {% include images/block.html src="http://placekitten.com/g/1000/1000" %}

All images except *left* and *right* support optional "credit" and "creditlink" properties:

    {% include images/block.html src="http://placekitten.com/g/1000/1000" credit="Placekitten" creditlink="http://placekitten.com" %}

#### Tweets

    {% include tweet.html user="Loic Le Meur" username="loic" id="310492485463986178" date="March 9, 2013" text="If you want to start a business there is no point in finishing college, just stop education Elon Musk" %}

#### Youtube

    {% include youtube.html id="YoutubeVideoId" %}

#### Gist

You can use the standard Github Pages embed, but just because I keep forgetting:

    {% gist 25b67f94e3b82a94303c %}
