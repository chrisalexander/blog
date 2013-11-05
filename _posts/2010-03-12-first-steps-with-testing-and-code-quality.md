---
layout: post
heading: 'First Steps with Testing and Code Quality'
categories: dev
---

Every developer's goal is to write bug-free code that meets their specification. With Visual Studio 2010, there has been a huge focus on testing, and that means it is even easier than usual to write fully tested, stable and secure applications with fewer bugs.

Here I'm going to run down some of the features of Visual Studio 2010 and companion applications that make bug-ridden code a thing of the past.

**Microsoft Test Manager**

Test Manager is installed as part of Visual Studio 2010 Ultimate edition. It is a dedicated location for planning, managing, and running test cases against your application.

In line with how Visual Studio Team System allows all kinds of stakeholders to work directly with the project, Test Manager is aimed at testers and test managers as a way of effectively managing and analysing the test suite for the code and ensuring the code - and its tests - are up to scratch.

### Microsoft Lab Manager

Building an application in .NET (for example) with a wide range of target platforms has always made it difficult to test on all of the targets.

Microsoft Lab Manager makes this simple by allowing you to manage a suite of virtual machines that run your target platforms. This means you can then quickly and easily deploy a build of your application to the target, and analyse its performance and run your tests. This works especially well with IntelliTrace.

### IntelliTrace

IntelliTrace is, in my opinion, a brilliant idea. It allows a tester, developer, or other stakeholder to take a freeze-frame of the application they are testing at a given point in its operation. This then creates an IntelliTrace, which can then be passed to the developer, who can run the application and debug it based on what the stakeholder saw.

For example, if you are testing an application and experience an error that the developer could not reproduce, you can take an IntelliTrace and pass it to the developer, who can then see the snapshot of the application when you reported the error and fully debug it. Awesome!

### Automated builds and testing with Team Foundation Server

Team Foundation Server has the capability of automatically building your application periodically, to check for build errors and to provide the latest running copy.

It also has the ability to automatically run your unit tests on the application - great for running the full test suite after an update.

The feature I am particularly fond of is the ability to run the full tests on commit to the version control repository, and reject the commit if it fails any of the tests. I can see how this could annoy the developers, but at least the latest build would always be correct!

### TDD support and Generate From Usage

Visual Studio now supports the Test Driven Development approach to writing code.

In TDD, unit tests for the code are written *first*. Then, every time a test case fails, you write the exact amount of code to satisfy the test case.

The result, after many iterations of this test-fail-code-test approach, is a fully unit-tested class / method / application - which I think is pretty awesome.

Visual Studio helps out with the Generate From Usage feature. It allows you to write a piece of code in your test (for example, instanciate a class that doesn't exist yet) then select one button to generate the class from the test case that you expect it to fulfil. This gives you a template to start out with in development, and saves a huge amount of time.

### Test Impact Analysis

If you've just made a bug fix to a single, little-used method in your application, you don't want to be waiting for long periods of time for all your test cases to run to ensure you haven't broken anything.

With Test Impact Analysis, you can see exactly which tests have been affected by your change in the code, then only run those tests. Great for those little fixes!

### Code Coverage, Complexity and Maintainability

Code Coverage has been expanded to allow you to see what code in your application is covered by unit testing. A great tool to show you which parts of code need proper tests, and where your unit tests can be improved. Coverage is shown down to the method level.

Code Complexity and Maintainability runs various forms of analysis on your code, and determines where your code is overly complex and therefore difficult to maintain. This allows you to see - crucially, early in development - where there are code bottlenecks, and allows you to predict where problems may occur.

### Database Quality Assurance

Databases are often overlooked in the testing, as we are driven to build successful unit tests for our code.

However, not having the correct schema on the database when you deploy the code can lead to catastrophic problems.

Therefore, you now have the ability to see changes in your database schema in a version control-like interface. This allows you essentially see the difference since you last deployed, and be prepared to do those changes.

It also allows you to very easily build scripts to roll out schema updates to the database, in an effective and guaranteed manner. This is something that I'm sure all database administrators can't wait to get their hands on!