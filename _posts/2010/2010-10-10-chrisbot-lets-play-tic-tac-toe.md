---
layout: post
heading: 'ChrisBot: Play Tic Tac Toe'
categories: dev
---

One of the sessions I attended at Software Craftsmanship 2010 (the other being on [Refucktoring](/on-engineering/dev/refucktoring-my-take/)) was called Robot Tournaments. This seemed extremely intriguing to me so I was there with the laptop out ready to try my hand at whatever this tournament was.

The idea of the project was to create a battlebot rewarding a rapid development cycle. There is a central tournament server which executes everyone's scripts in various "rounds" of battle. You are pitted against all the other competitors in each round. The sooner you deploy *something*, the more points you got. The idea was to promote the concept that fast iterations are more rewarding than sitting working on a feature for a long period of time.

The game involved was Tic Tac Toe. You receive the current game board state as a parameter to your script, and you output a single integer which is the square you'd like to play in. Simples!

My code is currently in a pretty buggy state, as it was not quite working properly by the time the session finished. The general featureset of each release was quite progressive, and I was pleased to get a script involved in each of the 7 rounds of the tournament.

* Returns a fixed number
* Returns a random number from the board
* Returns a random number from the board that hasn't been taken yet
* Attempts to place in the square which would contribute to the most number of solutions
* Attempts to place in the square which would contribute to the most number of solutions that would allow me to win (heh, oops)

You can go grab my code now on [Github](http://github.com/chrisalexander). I don't recommend running it in its current state ;-) If I get the opportunity I will try and iron the bugs out of the algorithm and make it a bit more efficient. Thanks to @MattWynne for the session - his tournament server is [open source too](http://github.com/mattwynne/robot_tournament).

As a follow-up to this, I'd love to get some students involved in playing these too, and maybe try running it at a few events too!
