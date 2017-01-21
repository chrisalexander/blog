---
layout: post
heading: 'Visualising data in F#'
subheading: 'Now we have our data, let''s see it'
categories: f-sharp
---

In [yesterday's post](/on-engineering/f-sharp/experimenting-with-data-in-f-sharp/), I discussed how we could load some data using F# through the mechanism of type providers, and performed some rudimentary analysis of that data.

The final stage of any data analysis work is to visualise your results in some way, so that they can be understood, interpreted, and generally made useful. Now that we have some data in our F# script / REPL, it's time to take a look at it.

## Loading the data libraries

In the previous posts, I discussed using the FsLab libraries as they bring together a whole heap of useful components that you can make use of straight away.

One of these is [XPlot](https://tahahachana.github.io/XPlot/) which allows you to render charts using both Google Charts and Plot.ly.

To make use of XPlot, make sure you have the FSLab script included, and then open up XPlot.GoogleCharts:

{% gist b83970b6765a66182ef4343425655ad8 %}

## Doing some basic formatting

The next step is to format the data so it is in the right format for plotting.

I would like to plot a scatterchart of all match scores for the football season we loaded previously.

To do this, we first repeat the procedure to collect together the matches from all of the rounds (essentially the equivalent of a C# SelectMany):

{% gist a53b9329f72d68923bbb984850e81361 %}

Now we want to format these match objects into tuples of scores, so that they can be formatted on the X-Y format of a scatterplot.

To do this, I have created a function which takes an individual Match object, and returns a tuple of two ints which is the home and away scores.

To facilitate this, the scores are actually *Option* types, because they may be null in the JSON. Remember the JSON type generators we used back in the previous post? For safety, these properties are marked as Option types in case they ever disappear from the JSON. To help with this, I have created the orZero function, which turns it from an *Option int* to an *int* (with a value of zero if the Option value is set to None). [Here's some interesting reading](http://fsharpforfunandprofit.com/posts/the-option-type/) on the F# option type.

Following Mark Seemann's talk at NDC yesterday, I decided to sneak in a *flip* function as well, to allow the argument cancellation to take place in the orZero function, because the non-default value is usually the first function rather than the last one.

{% gist 398126e647cdd2e5f851970461bd9b14 %}

So now all we need to do is pass our matches into our processing function:

{% gist f23c14236f9638de625430f70561703a %}

Now our data is ready to render.

## Rendering the data

Now that we have prepared the function, we are ready to render it. Fortunately this is massively easy, as we have the right format now!

{% gist 5080373475fe63d3788a0a08a22247a4 %}

This produces a rather nice result in our web browser:

{% include images/center.html src="http://media.chris-alexander.co.uk/pictures/chart.png" %}

Hopefully in the future there will be just as good support for this library in VS Code as there is in Atom, which renders the chart in a window in the editor for you.

Here's the complete code to round off:

{% gist 9b1bbf745e3f9d4c11b7031443f46fae %}