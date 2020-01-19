---
layout: post
heading: 'Analysing Gibraltar Loupe log messages using .NET'
categories: dotnet
---

I recently received the very kind support of [Kendall](https://twitter.com/kendallmiller) from [Gibraltar](https://web.archive.org/web/20170814093520/https://onloupe.com/) with an analysis problem I was trying to solve with some logs collected by Loupe.

There is an 8-step process that is run several hundred times per weekend which I wanted to analyse, retrospectively, in bulk. Fortunately, the application logged at the completion of each step, and how long each step took was in that message along with the name of the item the step was completed on.

The process runs on 5 specific machines and was used in multiple sessions and versionsover the time I wanted to analyse it. I had to use the logs to analyse the process retrospectively, as that would give me a lot more data to look in to now, rather than waiting for the process to run again. Using text files of the logs was not that great an option – I would need to collect them all together, and they didn’t extend back as far as I wanted the data from.

I was able to use Loupe, which the application was already instrumented with, to collect the sessions that I wanted to analyse. Given there were tens of these sessions (and maybe more in the future), manual filtering and exporting was not an appealing concept. Kendall to the rescue, and with just a few simple (when you know how!) steps, I could extract the sessions and logs I required and easily put together some C# analysis.

# Step 1: Collect your logs

Create a new package in Loupe Desktop by right clicking on the Packages tree and choosing New:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/1_new.png" %}

Then name your package:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/2_package.png" %}

Now, you can drag and drop sessions from your main Loupe database or server, in to this package:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/3_sessions.png" %}

Next, save your package by right clicking and choosing Save. Give it a name and put it somewhere you can find it later.
 
Now you end up with a .glp file with the log details exported in to it:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/5_glp.png" %}
 
# Step 2: Create the .NET project

I have just created a simple console application in order to demonstrate loading the sessions from the file we just exported. I started off with the most basic sample application you can create in Visual Studio:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/6_project.png" %}

Next, you need to import some Loupe DLLs. You can find them in the Loupe Desktop installation folder, which on my machine is: C:\Program Files (x86)\Gibraltar Software\Loupe\Bin\. The DLLs you need are:

* Loupe.Common.dll
* Loupe.Core.dll
* Loupe.Core.Windows.dll
* Loupe.Data.dll
* Loupe.Extensibility.dll
* Loupe.Serialization.dll

Import those in to your project:

{% include images/center.html src="https://camediahost.github.io/pictures/loupe/7_libs.png" %}

Now it is time to write some code!

# Step 3: Call the Gibraltar APIs

Now what we are doing is somewhat internal to Loupe, but Kendall said he didn’t mind me sharing how this works.

The first step is to load the Loupe Package file we created. To do that, we can create a new Package object from the file path:

{% gist 223891b9f05c064015823b9629df0e8e %}

Once we have the package object, we need to initialise it. The package at this point is just a shell, we have not loaded up any details from it.

This is a three-step process, which has to be done in this order – Kendall says so (and it seems to work) so let’s not ask too many questions and get on with it…

{% gist 3cf3238dde126ead12f54e6d039bec43 %}

By this point, the package is good to go. My use case was to read out some config data from the sessions in it, and also parse the log messages to find some that matched my regex.

I spent some time discussing the best approach to this with Kendall, and he suggested using the iterators for this purpose; this would use the incremental deserialization of the package and not try to load the whole lot in to memory at once (useful if you have a lot of sessions or log messages like I had).

So you can iterate the package’s Sessions property to look at each session:

{% gist d9aa7c727398ea74809d020353dde20b %}

As you can see, the objects in this Sessions collection are actually just the summaries; to get the full session itself, you need to get the ID from the session summary, and ask the package for the complete Session object. Once you have that, you can access all kinds of properties to give you session metadata (like you would see in Loupe Desktop).

You can also dig in to the details of the log messages themselves:

{% gist 2c68038858ba6fe66a183ec7a15cf802 %}

In this example, I execute a TryParseLogMessage method against the “Caption” property (which is what you see as the message summary in Loupe Desktop), which under the hood is running a fiendish regex to determine whether this is a message I need to process. If it is, then I pass that message off to the AnalyseSpecificLogMessage method, which does some further processing.

# Conclusions

Hopefully this gets you started on your journey to analysing your Loupe log messages in more detail. For me, it has turned Loupe from a really useful and easy to use log and metric collection system to a super-powerful analysis and investigation tool. Previously I was able to analyse specific sessions in great detail, and with the ability to programmatically access many sessions worth of logging and metrics, I can expand this to analysis over a large number of samples and sessions to get much better trend analysis.

And of course, thanks to Kendall for the great support as always.
