---
layout: post
heading: 'Gender Decoder in VS Code'
leader:
 image: https://raw.githubusercontent.com/chrisalexander/GenderDecoder/master/screenshot.png
 hassmall: false
 showonpage: false
 inverted: true
categories: code
---

Last week I wrote about the [Diversity in Tech seminar](/on-engineering/diversity/diversity-in-tech-seminar/) I attended at work. After I wrote up that post, I put it through the [Gender Decoder](http://gender-decoder.katmatfield.com/) and found it was slightly masculine-coded (so I [corrected it](https://github.com/chrisalexander/blog/commit/31c62b6f8658b87b4dc4884b7684526878f4c79d)).

That got me thinking, is there a way I can check this before I publish it? Given I write my blog posts in [VS Code](https://code.visualstudio.com/), and I had been meaning to write a VS Code extension for a while, this seemed like a good opportunity.

For the implementation, I borrowed the list of word prefixes that Kat Matfield used for her aforementioned tool. The implementation is pretty basic at the moment: you just have the Gender Decode command available, and that then grabs the entire contents of the document, and highlights masculine- or feminine-coded words in blue or pink respectively.

{% include images/center.html src="https://raw.githubusercontent.com/chrisalexander/GenderDecoder/master/screenshot.png" %}

This is a really early first cut of the extension, and was more just a bit of an exploration of what you could do when you have a few minutes spare and see if you can build an extension.

### Things I liked

The VS Code API is actually not too bad, seems to make sense.

It was also a really awesome debugging experience. If you have your extension folder loaded in Code, you just write your code and hit F5 and you get a new Code window with your extension loaded, that you can then debug much like you would for anything else.

### Things I'm not so much a fan of

The API documentation is pretty sparse, there is some help inline in the IDE but it's not always obvious what you have to be passing where. Ah, the fun of a dynamic language.

The only language options at the moment are JS and TypeScript. I guess that makes sense, and you could compile something from F# or whatever, but that feels like it would be a ton of work for not much code in the end.

It's also vexing that you need node and npm installed in order to be able to get to any of the tooling, it would seem to make sense that you can scaffold an empty extension without having to install yeoman.

Small thing but the package.json file is a real jumble, it contains metadata about your extension as well as implementation detail (such as what commands are available). It feels like it would be better if they were separate files.

Finally, there is no native support for this, so far that I can see, in the VSTS toolchain. I don't want to get into the whole building JS projects is a pain (it is), but the only options you appear to have are grunt, bower and command line. It would be good if there was just a build step template for compiling the VSIX and then a release template for pushing that built VSIX artifact over to the marketplace. Seems like a no-brainer as it would be super quick and easy to hook up to a github repo and build the story around VSTS for open source too.

### Check it out

The extension is on the [marketplace now](https://marketplace.visualstudio.com/items?itemName=chrisalexander.genderdecoder) - as I said it's very basic to get started wtih, ideally I would like to keep making little improvements to it and easily deploy them. Perhaps once I have figured out how to get it working nicely in VSTS!

It would be awesome if people would like to contribute, [pop over to Github](https://github.com/chrisalexander/GenderDecoder).