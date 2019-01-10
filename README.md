# Speedy Quiz Project

## React 16 / Symfony 4 Quizz project

This project has been made by 4 peoples. I just deployed it on my own github account and wrote this special doc.

My main responsability was to create the database and all server requests to fetch and update quizz and 
player's informations. I had to setup the authentification system too.

We used tokens for authentification and we also created an API REST manually for the communication between front and back.

We only had 1 month to make this project, including all the preparation and conception parts. 

## The game

You have 15 questions for each theme. You chose your difficulty : simple, normal or hard. Depending on what you choose, you will have more or less time to answer all the questions. 

The harder it is, the more points you win for each question.

One bad answer and you lose ALL your points ! If you don't have time anymore, the quizz stop and you also lose ALL your points ! 

**At any time, you can press the "STOP" button to save ALL your points and stop the quizz**. 

The quizz is divided in 3 steps :
- **First step** : you choose the correct answer between 2 proposals, easy !
- **Second step** : you choose the correct answer between 4 proposals, less easy !
- **Third step** : you write the answer on your own ! not easy at all !

Hopefully, we aren't that bad and we created 4 jokers to help you in your points quest :

- **"Skip"** : you can skip the question and earn points as if you answered right
- **"Revival"**: if you are wrong, you revive and start again at the beginning of the step
- **"50/50"** : only usable in the 2nd step, it deletes 2 bad answers
- **"Timer+"** : it adds a few seconds to your timer

So I think you got it: this game is a mix between speed, risk taking and strategy

For the moment, the project isn't online. Its main goal is to show our skills in web developement.
