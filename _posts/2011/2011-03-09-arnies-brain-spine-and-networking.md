---
layout: post
heading: 'ARNIEs Brain: Spine and networking'
categories: uni
---

This post details the core component of ARNIE's brain, the Spine software, and how the networking system for the robot works.

## Networking

Due to health and safety considerations, we have our own sub-network that we use exclusively for data packets carrying signals for the robot. The two xPC Target machines are wired in to only this network. All of the PCs involved have dual network cards for access to the University network and the internal network simultaneously.

Two Netgear switches provide the network infrastructure, and all PCs have static IP addresses configured that match up with their names (Amy is .1, Beth is .2, Cassie is .3 etc.).

Data is sent over the network exclusively using UDP. There are several reasons for this:

* It is easier to build a UDP server than an HTTP server in most of the environments we were working in.
* xPC Target and Simulink support only UDP for networked communication.
* All of the systems are designed to be robust and fault-tolerant, maintaining their own internal states and all capable of receiving environmental data if required.
* As a result of point 3, message delivery guarantees were not absolutely required.
* We would be sending a lot of information over the network, and would rather keep transfers small and light instead of hefty requests such as HTTP etc.
* The brain architecture was somewhat inspired by the fault-tolerant nature of the internet architecture.
* UDP matches closer to the model of neural systems in animals/humans - neurons do not make requests and expect responses from other neurons.

In order to avoid all kinds of problems with sending and receiving data, recompiling application components just because there has been a networking change, and to optimise the network traffic, all data is sent through the Spine application (details below).

## The Spine

The Spine's primary purpose is to provide signal marshalling and distribution to the entire brain and handle all communication directly with the robot-controlling xPC Targets.

All network data passes through the Spine; so where the encoder data from the arm goes to several locations, it is actually all sent to the Spine which then distributes it as necessary.

The Spine is written in Python. It has been built to be generic, so information specific to the particular application (in this case, a brain controlling a flame-passing robot) is specified in a JSON configuration file which is then loaded at runtime and is used to determine how the Spine behaves.

### Inputs, Outputs, Connections

The Spine's configuration essentially provides a list of "inputs" to the Spine (data sources), a list of "outputs" from the Spine (data sinks), and a set of "connections", which link inputs to outputs.

Each input specifies the port on which to listen, the input type it is, and the format of data on the input. The type can either be "streamed" or "not streamed". The difference is a non-streamed input blocks until the next signal is received from that input, and a streamed input listens permanently to the port and returns the latest value it received whenever requested. In the current brain architecture, all inputs are "streamed", although the other option is there if required.

Each output specifies the host and port to send the data to, and which format to send it in.

A connection simply links an input to an output. There can be the same input going to multiple outputs, and multiple inputs going to the same output (so long as the target output is capable of handling such data).

### Enhancements: data formats and coordinate frames

Each input and output has a data format attribute listed. There is an extensible list of converters available to the Spine which provide conversions to and from various data formats. The common ones used in the system at the moment are "simulink" (a binary format used primarily by the xPC Targets) and "csv" (the common "comma separated variable" format which is easy for most software to decode).

Upon input, the input thread automatically checks which converter it has installed, and converts the data from the format into a Python standard list of lists (a list of coordinates - more on that in the data format section). The opposite happens in the output threads - a standard Python datastructure is converted into the output format the other component is expecting to receive before it is dispatched.

Coordinate frames are an important part of the robot architecture and are therefore a built-in capability of the Spine.

Each part of the robot that interacts with the environment has its own coordinate system. In order to make them work together, they all need to be linked to a Global Coordinate System. This is a single point of reference that everything is linked to. For the system to work, each part that interacts with the environment must also know where it is in relation to the Global Coordinate System.

In order to avoid having to build coordinate transforms into all of the subsystems, the Spine deals with all coordinate system transforms. Each input/output from a device has a homogeneous transform matrix defined for it. This is a 4×4 transform matrix that defines the translations, rotations, and scaling factors required in order to convert a position in that component's coordinate system *into* the Global Coordinate System. Some components do not need transforms; for example brain systems just work in the Global Coordinate System. However, the arm system needs a rotation in it (as it is not mounted horizontal, so far as its own coordinate system is concerned), and the eyes have an offset from the GCS, and so on.

Once the data has been converted to the right format on input, it then has its coordinate transform applied in order to make it in the Global Coordinate System. It is then made available for other systems to use. On the output, the inverse of the homogeneous transform matrix is used to convert the Global Coordinate System position into the coordinate system of the output device.

### Extra enhancements: data checking

There is also an option that can be switched on for outputs to check that data values sent to the output aren't outside a certain radius from the last value sent.

This is used in our application only by the output to the arm signal; it is verified that the x,y,z coordinate being sent to the arm is no more than 50mm away from the last position the Spine dispatched to the arm output in any direction. This prevents overly large signals being sent to the arm causing it to jump, possibly in a manner that could damage the hardware.

If the Spine were not the single point where all data was sent and received through, this kind of low-level checking would not be possible. I have likened it in the past to a reflex action that you may see in your own spine, except working in reverse (preventing a motion instead of actioning one) of course.

### Optimisation: data de-duplication

In addition to being able to check data (see above), the Spine also optimises network traffic by only sending changing signals. This means that if someone commands the arm to move to the same position (for example, the origin) a number of times in a row, it will only do this once - subsequent requests will not be sent until the data value changes (and isn't too large, in accordance with any data checking rules).

### Hardcore: data format

The Spine is capable of processing multiple coordinates sent to it within the same data packet. For example, the eyes may have 2 flame sources, which they would need to send in the same packet rather than one after the other, otherwise it would look like the flame position had jumped from one to the other.

The exact way the coordinates are separated depends on the data format, and is worked out by the format converters used on the input and output threads.

In the case of the "simulink" binary format, the number of values sent is assumed to be a multiple of three, with each trio representing an x,y,z coordinate set. Coordinate transforms are then applied to each of the coordinates which have three values (odd ones are left on the end but do not have coordinate transforms applied) before being made available. The inverse is true for the output system.

In the case of the "csv" format, there is a fairly easy rule in that a coordinate can have any number of points, which are separated by commas. These are then separated by semicolons. So two coordinates, each with four values (x, y, z, and a confidence for example) would take the form "1,2,3,4;5,6,7,8″. When this has been converted, the coordinate transform is applied to the first three elements of each coordinate, and not at all if the coordinate has less than three parts to it.

### Hardcore: thread pools

Because of the highly asynchronous nature of the Spine and the data it needs to send and receive, it is necessary that each of the input and output ports is managed by its own thread. This allows them to continue sending from queues or buffering up received values even if the rest of the Spine is busy doing calculations.

To manage these threads, there are separate input and output thread pool managers that behave slightly differently.

Once an input thread has been established, it is only ever used for the port that it is connected to. If a new receive port is required, a new thread is started up. If we have exceeded the number of threads we are allowed in the input pool, one is killed at random. Ideally this would never happen of course.

For the output threads, as each packet is dispatched on a per-host/port basis, there is no real need for a single connection. However, for a thread to change where it is sending to, it needs to re-instanciate some objects, which we would like to avoid if possible. Hence, in the output pool manager, if there is a thread that last sent to the host/port you wish to send to, you re-use that one; otherwise you choose one at random and send it through that thread.

## Previous posts in this series

* [An introduction to ARNIE](/on-engineering/uni/an-introduction-to-arnie/)
* [An introduction to ARNIE: technical overview](/on-engineering/uni/an-introduction-to-arnie-technical-overview/)

## Code

A lot of ARNIE's code is open-source under the MIT license, and available on [Github](https://github.com/arnie-robot).

* [Spine](https://github.com/arnie-robot/Spine)
* [Kinect software](https://github.com/chrisalexander/libfreenect)
* [PYT](https://github.com/arnie-robot/PYT)
* [BrainJS](https://github.com/arnie-robot/BrainJS)
* [English](https://github.com/arnie-robot/English)
* [Decypher](https://github.com/arnie-robot/Decypher)
