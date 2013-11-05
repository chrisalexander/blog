---
layout: post
heading: 'Simple timing in Silverlight 4'
categories: dev
---

I spent a while this morning becoming somewhat baffled at the apparent lack of simple-to-use Timing features in .NET 4 in Silverlight. All I wanted was a simple solution to call a certain method inside the current scope and thread ever few seconds. However, many of the timing solutions are designed to work in a multi-thread manner, which takes everything out of scope and does not permit the required access to resources that I had in the standard scope.

Long story short, you can make use of System.Windows.Threading.DispatcherTimer to solve this problem. Here are the code samples.

Make sure you have the right statement at the top of your class:

    using System.Windows.Threading;

Rigging it up is quite easy, just put this in one of your methods where you need the timer started:

    timer = new DispatcherTimer();
    timer.Interval = new TimeSpan(0, 0, 10);
    timer.Tick += ExecuteRequest;
    timer.Start();

Then, the ExecuteRequest method of the class must take this signature:

    private void ExecuteRequest(object Obj, EventArgs e) {}

Simples, as the say.
