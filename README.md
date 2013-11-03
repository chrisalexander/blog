## Writing posts

### YAML front matter

#### Layout

The layout of the page. Choose from "post" for a blog post (with or without leader) or "image" for an image post (no footer on this page either).

#### Heading

The page title, inserted at the top of the post if you choose "post" layout.

#### Subheading

The page subheading, put underneath the heading for you if specified.

#### Leader

An object specifying the page leader, if desired.

* Image - URl of the image to show as the leader
* Inverted - set to true to invert the colours from black text on the image to white text
* Position - the position of the text on the image. Choose from top, left, bottom, right, top left, top right, bottom left, bottom right. Leave blank for the middle
* Hidetext - set to true to make the text auto-hide as you scroll down on post pages, and to make the text and home link disappear if you stop interacting on image pages.

### Post content

Write post content with normal markdown.

You can include images, like so:

{% include images/center.html src="https://docs.google.com/uc?id=0B6Hlcpe0LOWKYnJUNnVYbkVSdjg" %}
An image in the center of the page with the given src

{% include images/left.html src="http://placekitten.com/g/500/800" %}
A left-aligned image

{% include images/right.html src="http://placekitten.com/g/400/400" %}
A right-aligned image

{% include images/max.html src="http://placekitten.com/g/1400/600" %}
An image which expands to the full width of the page (may be >1 page high)

{% include images/block.html src="http://placekitten.com/g/1000/1000" %}
A block image which sits in the middle of the page
