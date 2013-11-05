---
layout: post
heading: 'Possible proof emerges that P != NP'
categories: dev
---

*This is a cross-post from the [DeveloperFusion news site](http://www.developerfusion.com/news/85190/possible-proof-emerges-that-p-np/).*

Remember the [Travelling Salesman Problem](http://en.wikipedia.org/wiki/Travelling_salesman_problem) (TSP)? I hope you're sitting comfortably.

[Yesterday news emerged](http://gregbaker.ca/blog/2010/08/07/p-n-np/) of an HP researcher who has claimed that he has proved that P != NP.

[The P=NP problem](http://en.wikipedia.org/wiki/P_versus_NP_problem) is one considered so fundamental to the future study of computer science that the Clay Mathematics Institute assigned it as one of its Millenium Prize Problems, and anyone who can solve the problem is in line for $1,000,000.

The question of P=NP is one of algorithmic complexity. The P stands for polynomial time - so a solution to an algorithm may be verified in O(n^2) time for example. NP stands for Nondeterministic Polynomial time. The problem arises when you have a theoretical algorithm that it is computationally easy (i.e. in polynomial time) to prove a given solution, but finding one of the actual solutions from the start is computationally hard. A common example is this: Given a set A of 10 random positive and negative integers, do the numbers in the set B (where B is a subset of A) sum to zero? If someone gives you a set B then it is extremely easy to verify - you add the numbers together and see if they equal zero or not (it is O(n) time). However, finding a set of numbers that meet the requirement is computationally more complex.

Now, on to the Travelling Salesman. TSP is what's called an NP-Complete problem. That is, any NP problem can be transformed to the TSP problem in polynomial time. That means, if we can prove that the TSP problem can be solved in polynomial time (or, P=NP), then any NP problem can be solved in polynomial time, via a transformation to the TSP problem.

It remains to be seen whether or not peer scruitiny of the researcher's paper reveals any flaws in the proof. I took a look at it last night, and I'm not ashamed to admit that most of the introduction was beyond me. It uses a combination of advanced mathematics and physics principles to bring about a proof that P is in fact not equal to NP, and therefore there is no way to solve the NP problems in polynomial time.

You can [grab the paper now from Scribd](http://www.scribd.com/doc/35539144/pnp12pt), if you're feeling brave.