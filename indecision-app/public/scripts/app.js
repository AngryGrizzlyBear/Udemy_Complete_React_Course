'use strict';

// function square(x) {
//   return x * x;
// };
//
// console.log(square(3))
//
// // const squareArrow = (x) => {
// //   return x * x;
// // };
//
// const squareArrow = (x) => x * x;
//
//
// console.log(squareArrow(4));

// Challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike
// Create regular arrow function
// Create a second arrow function using shorthand syntax

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getLastName = function getLastName(fullName) {
    return fullName.split(' ')[1];
};

console.log(getFirstName('Jaden Smith'));
console.log(getLastName('Jaden Smith'));
