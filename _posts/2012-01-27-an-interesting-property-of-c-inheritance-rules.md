---
layout: post
heading: 'An interesting property of C# inheritance rules'
categories: dev
---

Today I was playing with the robot and was thinking about a few possible ways of solving a particular problem I was having so that the internal API is nice for developers to attach to.

I wondered if a method from a base class could be used as an implementation of an interface, even though the base class does not implement explicitly that interface (but the inheriting class does).

I will admit to not fully understanding the little details of C#'s inheritance system, but I and the people I asked about this problem couldn't give a definitive answer without trying it out.

This is the simplest code I could write that explains the concept of what I'm doing. ChildClass extends BaseClass and inherits Interface, but does not implement the testMethod method defined in Interface (however BaseClass does). For ChildClass2, the method is overridden. The output is what you would expect - ChildClass.testMethod() writes "BaseClass", and ChildClass2.testMethod() writes "ChildClass2″.

Note it does not matter in this case whether BaseClass is abstract or not, nor does it matter whether testMethod in BaseClass is declared virtual or not (but you can't use ChildClass2 if it's not virtual of course).
