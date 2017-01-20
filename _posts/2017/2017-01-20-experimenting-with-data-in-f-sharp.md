---
layout: post
heading: 'Experimenting with data in F#'
subheading: 'First, getting the data'
categories: f-sharp
---

Following on from [yesterday's post](/on-engineering/f-sharp/getting-started-with-f-sharp-scripting/) about setting up an F# scripting environment, it only seems right that the next step be to actually get some data and start working with it.

Fortunately, F# makes this super easy, with the help of some great libraries.

## Installing FsLab

[FsLab](https://fslab.org/) is a machine learning and data science toolkit for F#, which conveniently bundles together a load of tools to make it easy to acquire, process and visualise data.

The first thing you need to do is get this library. If you followed along with [yesterday's post](/on-engineering/f-sharp/getting-started-with-f-sharp-scripting/) and created a project folder for your F# scripts and installed the *ionide-paket* plugin then you will have everything you need to go straight away.

Incidentally, FsLab has a great report you can [get free from O'Reilly](http://www.oreilly.com/programming/free/analyzing-visualizing-data-f-sharp.csp) that goes through a lot of this - well worth investigating.

To install FsLab, then hit F1 within Code, and search at the prompt for "Paket: Add NuGet Package" (you can just type a part of this). Once you have selected the command and pressed enter, specify the package name as FsLab and then hit enter again. A bit of patience while it downloads... and you're done.

## Using FsLab

To use FsLab, begin by creating a new *.fsx* script file in your repo. In this example I am going to be using some football data, because it's free and easy, so I called mine *football.fsx*.

In order to make use of the libraries, at the top of your script you will need the following code:

{% gist 1dc2aa324e8358208f9317087a4de6a8 %}

Now we can crack on with the data acquisition!

## Using type providers

Type providers are an **awesome** part of F#. They are one of the key features which makes strong typing in a functional language work (or even be bearable).

The concept of a type provider is that you have code which can interpret some data and then provide concrete types from that data that you can reference throughout your code. Microsoft Docs [has a great description of them](https://docs.microsoft.com/en-us/dotnet/articles/fsharp/tutorials/type-providers/) if you are looking for more details.

FsLab has a great library built into it where you can create a type provider from all kinds of documents, including JSON documents. For this example, I am going to use some of the football data [from this URL](https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.json).

So the first step is to create the types using the type provider. To do this, you create a new type using the JsonProvider and the URL:

{% gist a0530891c5b31211a2ba74e3ccfd2b7e %}

Note that I am using the actual data URL here, but it just has to be a representative example of the structure of the data you will be retrieving in order for it to work.

Once you have created the type provider, you can load the data as so:

{% gist 463d73c02ec9734fd7d2194fe400f96f %}

And now you have your types, and your data!

## Using the data

In this case, *uk* is the variable containing the data. You can type new code in to examine that data.

An example of this is collecting together all the matches; the UK data is all of the rounds, and there are multiple matches in each round, but if you want one collection of all matches (irrespective of rounds) then you could do:

{% a53b9329f72d68923bbb984850e81361 %}

I'm going to deal with further manipulation of this data, as well as visualisation, in a future post.