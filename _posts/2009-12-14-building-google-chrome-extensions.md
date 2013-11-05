---
layout: post
heading: 'Building Google Chrome Extensions'
categories: dev
---

Yesterday afternoon while I was sitting at home, I realised I hadn't yet gotten around to trying out the [extensions](https://chrome.google.com/extensions) feature that has been recently released in the beta branch of [Google Chrome](http://www.google.com/chrome).

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/chrome.png" %}

*Note: in order to enable extensions, you need to be on the dev branch, which you can install from [here](http://www.google.com/landing/chrome/beta/). If you're on a Mac/Linux, you probably already have the dev branch, but you will have to enable the extensions pages with instructions [here](http://grack.com/blog/2009/12/08/re-enable-install-button-for-mac-chrome-extensions/).*

A browser plugin is something I've never really tried before, so this was all a bit of an adventure.

It turns out that an extension for Chrome is incredibly simple, and very powerful at the same time.

## Familiar Structure

The main components of an extension are HTML, CSS and JavaScript. It is recommended that you use HTML 5, as Chrome supports this and it gives you loads more power over what you are doing.

All you need to do is put one extra file in your project that gives Chrome a bit of information about it, and then you're good to go. You can interact with Chrome through JavaScript, triggering and listening to events for example.

## Plugin Actions

Plugins take one of two forms - a browser action, or a page action.

A [browser action](http://code.google.com/chrome/extensions/browserAction.html) appears on every page, and provides features across all pages.

A [page action](http://code.google.com/chrome/extensions/pageAction.html) is designed to appear only on a subset of pages, like the RSS icon that sometimes appears when it is available. It is hidden by default, and up to you to show your icon when the feature of your plugin is available.

## Plugin Features

Your plugin must have an *icon*, that is displayed either on the taskbar next to the Page/Chrome options buttons, or in the address bar along with where you find the RSS icon when available.

You can also specify a popup, which is an HTML page that is rendered inside a popup window when the icon is clicked.

There is also the ability to specify a badge, which is a 4-character text overlay on the icon, and a tooltip which appears when the icon is hovered over.

## Writing a Plugin

This is just a really quick run-down of getting a basic plugin started. I'd recommend the excellent [Getting Started](http://code.google.com/chrome/extensions/getstarted.html) and [Overview](http://code.google.com/chrome/extensions/overview.html) pages on the Chrome site.

### The Manifest

The Manifest file is a JSON file that tells Chrome information about your plugin. Here you specify popup HTML window sources, icon images, and so on. Here's a sample file.

### The Other Files

Then all you have to do is make sure that you have a 19�19 pixel icon for the "default_icon" file (icon.png), and "smile.html" has something nice in it - I would try this out:

*(yep, that's the new HTML 5 doctype)*

## Plugin Testing

Fortunately, Google have made this incredibly simple.

Go to [chrome://extensions/](chrome://extensions/) in Chrome, or click on Extensions in the Chrome Settings menu. Click the "+" next to the "Developer Mode" link, and hit the "Load unpacked extension..." button.

This will bring up a file dialog, where you choose where your plugin's files are. Chrome then automatically parses them and installs the extension for you. (If you make a change to your plugin, just return to this tab and click the "Reload" button - saves all that file choosing).

## Sneak Peek

Here's a quick look at the plugin I concocted today. When you click it, it brings up the TweetMeme Retweet button for the page you are looking at, as well as showing the current top stories on TweetMeme for your viewing and retweeting pleasure.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2009/12/plugin.png" %}

*For more on developing Chrome Extensions, check out the [Google Chrome Extensions Labs](http://code.google.com/chrome/extensions/)*
