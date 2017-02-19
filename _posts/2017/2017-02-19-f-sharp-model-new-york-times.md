---
layout: post
heading: 'Building F# to open the New York Times'
categories: code
accent: c3ffda
---

Each day, the New York Times publishes its front page online. I find this a good place to get an overview of the news compared to their homepage which isn't quite so clear in terms of overall headlines.

I thought I would write a bit of code to help launch the front pages, as navigating to the thumbnails or PDFs is a bit of a chore from the website.

NYT publishes six images per day; PDF and JPG formats of the New York, National (USA) and International papers. Here are some example links for today:

{% gist d792cde45e3cc1c95ab184872f64111f %}

In line with my recent adventures, it's time to start off with a model for this. It turns out it's not that much work - we have two discriminated unions of the edition and format:

{% gist e8e0315d9bf6f289eaddbf9395c1e6c6 %}

So now we need to build the links to the individual editions based on what you request with the model.

The links break down into three components: the bit up to "nytfrontpage", the base path; the filename; then the file extension. We can write functions to provide these parts, given the input.

To begin with the base path:

{% gist d3f4a505e8478aa73f8f41b3178c0d0d %}

Note how this implementation performs string formatting to put a date object into the correct format in the URI.

The next step is the file name, which depends on the edition, and then the date in the international edition:

{% gist 789ca9fcf2ed909c87bab8c44347ce5c %}

For some reason the international edition also has the date in the filename, so that is applied here.

The final bit of the URI is the file extension, which is essentially a mapping:

{% gist 6b3ea953c94c5aa61fd4ec71e1e06a8c %}

The three components we need to build the URI are the edition, format and date; so we create a function which applies the three conversions we have above to build the full URI:

{% gist 50ea4d72f923217f0e52f0488663ce23 %}

So we can now invoke the function in this way in order to get a URI:

{% gist 1c61ac93641537e545fa0ac198a9c6b1 %}

We can take advantage of functional programming's partial application to create some nice helper functions.

For example, the first here partially applies getFile to always work with the current day. The second example here creates a function with no arguments which gets today's New York edition PDF.

{% gist dc3e11747c6644818e95bedb05a9dc7a %}

We can also write a function to open a link in the default browser:

{% gist 542f3c01283eff6a58d76171399ddc09 %}

Finally, we can combine it all together to launch today's New York PDF in the default browser:

{% gist 64cca360010fe14cfe1f3da99861f42f %}