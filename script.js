"use strict";

const fullName = `Kerry Hidlay`;
const birthday = `April 17`;
let age = 31;
let detroitGC = true;
let personalInfo = null;

// * Couldn't get the consolidated version of the code below to work. *//
// const kerry = {
//   fullName: "Kerry Hidlay",
//   age: 31,
//   birthday: "April 17",
//   detroitGC: true,
//   personalInfo: null,
// };

if (detroitGC === true) {
  personalInfo = `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`;
} else {
  personalInfo = `My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, MI. I am currently ${age} years old and my birthday is on ${birthday}.`;
}
console.log(personalInfo);

let lifeEvents = [
  "I was born in Lansing, MI.",
  "I graduated from Michigan State University.",
  "I am a Graphic Designer.",
  "I am currently a Grand Circus Front-End student.",
];

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the
// length of the lifeEvents array. Each iteration of the loop should log a new sentence
// from the lifeEvents array. You should only have one console.log method.

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

// Declare and initialize a variable named counter to the value of 0.
// ● Write a while loop that loops while true.
//    -  Declare a variable named randomNumber that is initialized to a random integer
//       between 1 and 10. Google search how to do this.
//    -  Write an if/else statement that has two conditions
//              ■ If randomNumber is not equal to 5
//                  - Increment counter
//                  - Use a console.log method to say: “randomNumber !== 5”
//              ■ Else
//                  - Increment counter
//                  - Use a console.log method to say: “5 === 5. It took counter iterations to randomly generate the number 5.”
//                  - Break

let counter = 0;
let randomNumber = Math.floor(Math.random() * 11); // returns a random integer from 0 to 10

while (true) {
  if (randomNumber !== 5) {
    counter++;
    console.log(randomNumber !== 5);
  } else {
    counter++;
    randomNumber = `5 === 5. It took ${counter} iterations to randomly generate the number 5.`;
    break;
  }
}
