---
layout: post
heading: 'Nice code coverage results'
subheading: 'Cleaning up code coverage in VSO'
categories: code
---

As part of my experiments with Visual Studio 2015 (and phasing out Resharper from my life) I have been giving VSO a go to get a feel for how it works compared to Github and other systems (such as legacy TFS).

One thing that always bugged me about using Visual Studio's built in code coverage is that it always seemed to cover everything, including your test runner DLLs and your test DLLs themselves. Really I only want coverage analysis of the code under test rather than everything in the directory!

Now I have had time to put the effort in and figure out how to get it working. Thanks to [these](https://web.archive.org/web/20170614051451/http://geekswithblogs.net/terje/archive/2013/12/04/how-to-exclude-code-from-code-coverage-in-visual-studio.aspx) [posts](http://blogs.msdn.com/b/sudhakan/archive/2012/05/11/customizing-code-coverage-in-visual-studio-11.aspx) ([and MSDN](https://web.archive.org/web/20141012013738/https://msdn.microsoft.com/en-gb/library/jj159530.aspx)) I have got something working rather nicely.

## Step 1: .runsettings

You need to create a runsettings file for use in your solution.

Create a new XML file, call it something descriptive like "CodeCoverage.runsettings", and make sure it is added at the **solution** level rather than the project level:

{% include images/block.html src="https://camediahost.github.io/pictures/vs2015/runsettings.png" %}

I have created an example file that I now use. This is designed specifically to exclude DLLs that end "Tests.dll" (which is how my test projects are named), as well as xunit, xbehave, and fluentassertions, which are the projects I am using for testing.

{% gist b72a0e82d4626a7705a0 %}

## Step 2: Use the settings file locally

Under the Test -> Test Settings menu, use Select Test Settings File and pick your .runsettings file. Run the code coverage locally to check that your output excludes the correct DLLs.

## Step 3: Use the settings as part of VSO build

In your VSO build (assuming you are using the new workflow), under the Visual Studio Test step, set your RunSettingsFile to the relative path from your root directory to the runsettings file. Mine is in the root next to the solution file, so it looks like this:

{% include images/block.html src="https://camediahost.github.io/pictures/vs2015/build.png" %}

Now you should be able to see the reduced coverage in your ouput in VSO builds as well.