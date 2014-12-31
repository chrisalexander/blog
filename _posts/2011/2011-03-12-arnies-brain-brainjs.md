---
layout: post
heading: 'ARNIEs brain: BrainJS'
categories: uni
---

This is the final post in a series detailing the development of the ARNIE robot.

In this post, one of the brain systems entitled BrainJS is described.

## Purpose

BrainJS is one of the two intelligence modules available to the ARNIE brain. It represents a more "classical" AI approach to the problem, in contrast to the other system which uses a more modern neural network design to solve the problem.

## Implementation

BrainJS is written entirely in JavaScript and run on the node.js server. This allows object-oriented design, as well as great native JSON support and networking architecture.

BrainJS uses essentially a state machine to execute a series of actions to achieve a certain goal. For a particular task, there is an instructions.json file which defines everything the brain needs to know about successfully completing this task. This also means that the BrainJS implementation is generic, and could be used by other systems in the future for similarly structured tasks.

Each task is defined as a series of actions. An action consists of a trajectory (a set of points to move through), and a set of decisions. There is a list of actions which are currently running, and how many "ticks" ago they started. A tick is when a step of the trajectory is executed. The trajectories are actually defined as arbitrarily-timed steps in sequence, and it is up to the brain system itself how fast it goes about executing them for reasons we will later see. It is possible to have the trajectories of multiple trajectories, or multiple cases of the same action's trajectory being executed simultaneously - their output is summed.

The decisions in an action are what define how to move between states in the state machine. Each decision has a value which tells the brain after which step in that trajectory's execution the decision should be taken. The decision itself is a state that will be compared to the arm's position and the position of any "objects" in the environment (in this application's case, flames). There is then defined an action to perform if the decision state matched the environment state (and how many ticks to delay its execution by), and an action defined for when the decision state doesn't match the environment state (and again, a count of ticks to delay execution by).

In the decision state itself, the decision condition can either be "-1″ (don't care), a value and threshold pair (this value plus or minus this given threshold), or a variable (see next section).

A series of actions are defined in order to produce a task. For example, in our flame passing task, there is a "start" task (go to the origin), "lightSelf" (which lights the arm splint from the presented source) and "lightOther" (which uses the lit arm to light another source).

### Hardcore: variables

The state machine keeps a log of variables, such as the arm position at a particular state and objects found in the environment at a particular state, in an array as it executes. This allows for any action decision state variables to contain a string referencing one of these variables. If it exists when it comes to the execution of that decision, the value is replaced in. Otherwise it errors and aborts.

In our example, this allows for a scenario where our "start" state can identify a light source and store its position, then the "lightSelf" action can move to the position of the light source found in the "start" action.

### Hardcore: trajectory verification

There is optional trajectory verification that can be enabled on the trajectory of any action.

Trajectory verification uses the feedback of the arm's encoder position to determine whether the previous step in the trajectory was successfully executed.

Because the output coordinates get sent to PYT for minimum jerk trajectory execution, PYT has the capability of detecting objects and reversing if it is unable to complete its path successfully. This would mean that there has been a failure and the brain must be aware of this. By verifying the trajectory at each step, this kind of error is detected and can be handled.

Each verified trajectory has a number of times that it is allowed to fail; if it exceeds this number in a row then the execution is aborted.

## Future works

Work has commenced on a parser to parse English written text into a set of instructions that BrainJS can use to execute a set of actions. This is by no means complete but should provide an interesting addon to the project.

The trajectory verification could also be more intelligent about how it handles situations where the trajectory fails to complete. For example, it could work out an alternative route which is not obstructed in order to reach its target.

## Previous posts in this series

* [An introduction to ARNIE](/4792)
* [An introduction to ARNIE: technical overview](/4800)
* [ARNIE's Brain: Spine and networking](/4811)
* [ARNIE's Brain: Kinect](/4814)
* [ARNIE's Brain: PYT and minimum jerk trajectories](/4818)

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/arnie-robot).

* [Spine](https://github.com/arnie-robot/Spine)
* [Kinect software](https://github.com/chrisalexander/libfreenect)
* [PYT](https://github.com/arnie-robot/PYT)
* [BrainJS](https://github.com/arnie-robot/BrainJS)
* [English](https://github.com/arnie-robot/English)
* [Decypher](https://github.com/arnie-robot/Decypher)
