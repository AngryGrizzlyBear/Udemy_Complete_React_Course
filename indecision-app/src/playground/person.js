// import './utils.js';


// make person.js
// named export isAdult(18) = true if adult, otherwise false.
// named export canDrink(18) - true if 21 and over, otherwise false.
//
// import isAdult and canDrink
// use both printing result to the console.

 export const isAdult =  (age) => age >= 18;

 export const canDrink = (age) => age >= 21;

 const isSenior = (age) => age >= 65;

 export default isSenior

