---
layout: post
heading: 'Getting started with F# scripting'
subheading: 'Your environment with VS Code'
categories: f-sharp
---

I have recently embarked upon an investigation into F# scripting, which has involved a bit of set-up with the environment before doing anything useful.

## Setting up the software

To begin with I have installed Visual Studio Code. It has some great plugins for F# and is much more lightweight than its bigger brother. You can download and install [VS Code from here](https://code.visualstudio.com/).

The next step is to get the F# plugins installed. There are a *lot* of really cool plugins for VS Code so it is worth having a bit of a look around the extensions marketplace for things you might find useful.

The ones you need for F# integration are all prefixed "Ionide" after [ionide.io](http://ionide.io/) - I installed *ionide-fsharp* and *ionide-paket*, you can get *ionide-fake* as well but it's not going to be used at this point. You can install the plugins by loading the "extensions" pane and searching for the names and hitting Install. Once you have installed all the ones you want, you need to reload the window for them to be installed - and then you're done.

## Creating a project

You don't have to create a folder for your F# code, but I happen to find that it is a more convenient way of keeping scripts together. Plus, when you are loading libraries from Nuget using Paket, it makes a lot more sense.

So to create a folder for your F# code, go to File -> Open Folder within Code. Then create an F# script folder on your machine, and choose Open. This then opens the Explorer pane on the left of the Code window, which shows you the files in your folder (which probably is currently empty).

## Creating your first script

One of the great things about a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) is that you can quickly create and evaluate code. But REPL's aren't really designed to allow you to easily come back and re-use your code later on.

Something I have been experimenting with is using F# script files in Code to persist the code written, and then using Ionide to send the code on-the-fly to FSI, the F# REPL.

So to get started, let's create a super simple F# script. Create a new file and save it with the *.fsx* extension. Here is some simple F# code to put in to get you started:

{% gist 5bb3d28e729299a884cfb21a45e9e875 %}

Once you have saved the file, there are a couple of shortcuts that are super helpful.

**Alt+Enter**: Evaluate current selection in FSI

**Alt+/**: Evaluate current line in FSI

So if you select the first two lines of this code, and then press **Alt+Enter**, the F# Interactive window will pop up at the bottom of the screen and evaluate your code. Now this won't actually *evaluate* this function - it will just make it available in your FSI session.

You can now evaluate the function. You could do this by moving your cursor to the fourth line and pressing **Alt+/**. When you do this, you should see the output in the FSI window:

_val it : int = 3_

which indicates that you got an integer result of 3 (fortunately correct!)

You can also invoke that function from the prompt as well, so if you focus on the F# Interactive window, you can type other calculations such as *sum 4 5;;* to get 9. Note that when you type into the interactive window directly, in order for the command to be evaluated, you need to type two semicolons **;;** before you press enter.

## Other shortcuts

There are a few other FSI commands that you can find hidden in the F1 menu, so if you hit F1 and type *fsi* then you can restart FSI, send the whole file (useful when you start back on an older project), and other useful utils.