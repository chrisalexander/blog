---
layout: post
heading: 'Google Spanner'
categories: dev
---

It's very rare that we get a peek inside the core algorithms and programs that Google uses to manage its worldwide data needs. So when we do, it's often fascinating and cryptic at the same time.

I have recently been reading the [papers that Google have released](http://research.google.com/pubs/papers.html) about various components of their system, particularly BigTable. I also discovered recently [this presentation](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf) [PDF] given by Jeff Dean, a Google Fellow, on Google's infrastructure, systems, and processing statistics that I found extremely interesting for a number of reasons.

{% include images/block.html src="http://media.chris-alexander.co.uk/wp-content/uploads/2010/03/google_logo3.png" %}

The first reason I found it interesting is just some of the numbers they are using casually; I thought 300 million realtime Retweet buttons a day at work was impressive - it's nothing!

The other reason I found it interesting was this is the first mention I've heard of Google Spanner, a product (not a wrench) that it is rumoured they are using internally already. Here's why it's interesing.

### Spanning Datacenters

Spanner literally spans many datacenters, offering distributed storage and computing services. Namespaces are now *independent of location*, unlike BigTable. But it maintains the tables, families, localities and coprocessors of BigTable, while using hierarchical directories instead of BigTable's rows.

It provides additional benefits such as fine-grained control of replication and ACLs (Access Control Lists).

### Strong and Weak consistency combined

Datastores such as Cassandra are *eventually consistent* - this means it may take time (less than a second, none the less!) for all nodes in a cluster to be consistent with the master. Spanner offers this, in addition to strong consistency.

This means you can selectively ensure all your datastores are consistent immediately (i.e. updates will be performed on all of them before the result is returned) or eventually (leave it to the replicator to ensure a single update makes it across all the nodes) - very powerful and extremely cool!

### Increased Automation

Imagine you're a software developer at Google - working on Mail, Calendar, Apps or something - wouldn't your job be a lot easier if you were provided with a stable, global resource that you could use, with the internal system managing itself entirely? It would be awesome.

This is what the automation is for - by making the lower-level systems more intelligent (without sacrificing speed or efficiency) you can make your apps quicker to develop and considerably faster and effective.

This also means the system adapts in the face of inevitable constraints such as bandwidth, packet loss, power loss, and other events which would otherwise disrupt the network.

### Google are serious

These are some seriously big numbers they're playing with as future expectations of the platform:

That is *a lot* of computing power!

For more on Spanner, check out these two posts from [The Register](http://www.theregister.co.uk/2009/10/23/google_spanner/) and [Scalable Web Architecture blog](http://www.royans.net/arch/spanner-googles-next-massive-storage-and-computation-infrastructure/).
