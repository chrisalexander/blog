---
layout: post
heading: 'ARNIE demo failure'
categories: uni
---

This afternoon, our robot project was supposed to have a demo. What actually happened was that we talked about it, switched it all on, and then it never moved. The demo was scrubbed, and fortunately this year did not count for any marks - otherwise we would have ended up getting very low numbers.

So why did a project which had been working so well fail so brutally? It was not a failing of the robot, nor really a failing of any one team member (although the fact I got the configuration wrong and failed to realise in time was the cause of the issue). I'm going to attribute this one to bad planning and last minute work.

The direct issue we experienced during the demo was that the arm did not respond to commands. This was due to a configuration value in the Spine software pointing the arm's commands at the head. I had previously switched it to this in order to position the head for the demo, and when the head did not behave as expected, I forgot to switch it back.

The head was only working properly yesterday; the vision system was only integrated today; the realtime transform which is required when the head moves to enable the camera coordinates to be correct relative to the global coordinate system was only implemented half an hour before the demo began

You can see why this might have gone wrong.

It is easy to sit here and regret it (let's be honest, it was a monumental cockup on my part, dealing significant damage to the team), so to get over it I have come up with a couple of ideas for how it can be prevented from happening in the final demo.

1. I shall implement a piece of software which takes the Spine's configuration and renders it in an easy to read manner. This will be run before any demo to ensure everything is configured as expected.

2. I'm going to take a (substantial) leaf out of NASA's book. They are the kings of process, and shuttle launches are prime example of this - checklists for literally everything. I plan to put together a detailed pre-demo initialisation, testing and verification checklist that we can use to prevent aching like this happening in future.

Hopefully these steps will allow us to improve our demos, and get our heads around the extremely complex suite of applications we have here. Maybe it will make me feel a bit better about all of this too.
