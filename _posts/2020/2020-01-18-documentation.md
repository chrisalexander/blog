---
layout: post
heading: 'Thoughts on documentation'
categories: code
---

I am aware this is not a regular occurrence among many developers, but I must admit I do enjoy producing documentation the vast majority of the time.

In many roles I have found myself sharing knowledge to users of the product or services I had been working on, mostly on a technical front - so API documentation and similar. I have done a lot of presentations over the years to technical users of things I have created or know very well. I think at the end of the day it comes down to the fact I quite enjoy helping people, and sharing knowledge through great docs is one way of doing this.

I also get a bit nerdy about great API documentation. The first one that comes to mind for me is [the Redis docs](https://redis.io/documentation) - a great blend of clarity of commands and explanation. Plus, how many APIs do you see documenting at the top of each command page the time complexity (big-Oh notation) of executing that command?!

I have heard a lot of people use many different excuses for not writing documentation. "Agile" is not an excuse for not writing documentation.

My recent documentation topics have been addressed at developers who are becoming maintainers of code I have produced, so a kind of knowledge-transfer format. I think a similar approach that I have recognised in how I produce documentation may well benefit in scenarios where you are publishing an API.

Thoughout I try to bear in mind who the audience is - normally in this scenario it's someone new to the code who is looking around and trying to figure out how it works. It may also be someone who hasn't been in there recently and is brushing up on what it does before they start coding whatever they are up to.

On top of that you have to bear in mind your aim; in this case, it would be ensuring that someone who is looking at your code for the first time is able to understand it and start working on it as soon as possible.

For me, producing successful documentation comes down to producing three layers:

1. Code
2. Comments
3. Wiki

### Code

Fundamentally, I try to write code that makes sense. I think everyone is familiar with what this looks like, or at least has an idea in their own minds of what they like, but here are some thoughts on how you could do this:

- Sensibly named variables, functions, classes, etc.
- Not over-doing the number of inputs or outputs to each function
- Modestly sized code files
- Adhere to appropriate style guide and local convention

I'm not saying these are hard and fast rules (or they all apply to every language or project), a not-to-be-deviated from gospel; they're even all phrased pretty loosely to give scope to interpretation. We're all sensible and I'm sure people don't set out to write completely incomprehensible code-files, so all you have to do is bear them in mind and then just treat them as guidelines if it's a bit much for your current scenario.

As an aside this is where code analysis tools are sometimes a bit painful, they are a rather brutalist approach to enforcing this kind of thing.

Anyway, if you admit that it's not possible to write 100% perfectly self-documenting code all the time (it really isn't!), then what do you do when you come across something that needs explaining?

### Comments

    ///<summary>
    /// Sets the state of the worker.
    ///</summary>
    ///<inputs>
    /// <input name="workerId">The worker ID.</input>
    /// <input name="state">The worker state.</input>
    ///</inputs>
    ///<output>The worker state.</output>
    public WorkerState SetWorkerState(WorkderId workerId, WorkerState workerState);

Nope. Not that!

May I refer you to the Redis codebase for some [excellent examples of code documentation in comments](https://github.com/antirez/redis/blob/7ef2270ee73e75b00b0c1bde40fb1df55c7ec6ff/src/server.c#L1073).

My general approach to commenting is that **every comment must add value**. It's easy to remember, and if you find yourself writing:

    // For each worker, set the worker state
    foreach (var worker in workers) {
        SetWorkerState(worker, nextWorkerState);
    }

then you can tell yourself you have failed this test and you can get rid of that comment. The code itself says the same thing, almost character for character!

So what is a useful comment? Well I tend to add comments within the body of the file when someone reading through it would not find what it's doing immediately obvious. Perhaps you want to point out a key bit of code in a long-winded sequence; point out that a function call is recursive and so might evaluate more than once below that invocation; make a comment about performance, external code, a non-obvious upcoming networking request... the list goes on.

When I add a comment, I try to put myself in the shoes of someone who has to fix a bug in your file, has never seen it before, and is scrolling through it for the first time. What would that person need to know to avoid pitfalls you might think are obvious (you know the code really well, after all) but actually aren't?

I also write comments in the top of code files quite often. I have been known to write significant essays in there. These comments are to explain to someone opening the file what to expect when they scroll down - your chance to prepare them for what they are about to find. This isn't a way of excusing a minefield of illegible, badly-named, uncommented spaghetti! But if you have a particularly complicated algorithm that people wouldn't normally stumble across, and you did it for a particularly good reason, then explaining that with some references and pointers to bits to watch out for (coupled with easy to understand code and useful comments in the body of the file) is a great way to keep friends with whoever has to follow you down that particular rabbit hole.

That being said, there are some things that probably shouldn't make it into a treaties in the function header, and for that you have:

### Wiki

Now this doesn't have to be a "wiki" wiki, but I have certainly used Github wikis, a OneNote on SharePoint, JIRA, all kinds of things.

The point is it's somewhere separate to the code and where you can write a bit more longform, add images / diagrams, style, links etc.

There are some downsides to this. Primarily, by keeping the documentation separate, whoever is looking at the code not only needs to know it exists, but also needs to know where it is so they can go find it (plus permissioning and other such entertainment).

You could also argue that this means the documentation can very easily get out of sync with the code, but I would like to explain why I don't think this is a problem: what you actually put in the wiki.

Given the points above about writing reasonably readable code and adding comments when there's something not completely clear, the wiki doesn't need to contain explanations of what the code is actually doing on a line-by-line or per-function basis. If you were to do that you would very quickly end up with either a load of developers fed up with having to keep going and updating the docs every time they made a tweak, improvement, bug fix or refactor, or a wiki that was out of sync with your code.

Instead I reserve the wiki for things that simply don't make sense to be commented inline or at the top of code files. What kind of things would qualify for that?

- Large-scale design decisions, that span multiple files / folders / projects
- High level architectures
- Discussion of algorithms or principles (you might find some of these in the top of files, it will suit the wiki if you need images for example)
- Explanations of how the code got to where it was

This last point is an interesting one.

What architectures had been tried in the past and didn't work out? These might be things in the history of the file (if you can find them in the potentially substantial commit log), but it's much easier to surface them separately so if they are revisited, that information and decision history is taken into account. You might even note things that never got committed, they were tried and failed before even checking them in.

I find it interesting to include what you were thinking at the time when you were implementing the code. I find documentation most difficult and tiring when you do it way after the activity of implementing the code. If you leave your nice shiny new code a little while to settle in then write down your thoughts while they're fresh, a few days or a couple of weeks later, it is of the most value and less taxing an activity for you to do. If you don't remember what you were thinking when you impelemented a particularly fiddly bit of code two years ago with the code in front of you, then it's not reasonable to expect someone else to be able to divine it just from your code! If you (properly) keep an [engineering log book](/on-engineering/engineering/engineering-log-book/) on a day to day basis then this will of course be a great help.

### Final thoughts

As I mentioned earlier, this isn't a hard-and-fast set of rules that I always abide by or enforce. But I noticed a common patten in a lot of documentation I was writing and had written, so I thought it would be useful to share it.

At the end of the day it comes down to being sensible. Not documenting from the start is expensive to rectify. Documenting code that frequently changes is expensive to maintain. Relying on documentation to overcome unclear code and non-existent or pointless commenting is expensive to keep up to date. And not having any documentation at all is going to result in confusion, wasted time and yet more costs in the future.

So the investment is worthwhile, make sure you do it as early as possible!