import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}`;
//     }
// }
//
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());
//
//
// //-------
//
// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
//
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());


// notes
// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     },
// };
//
// const getName = obj.getName.bind(obj);
//
// console.log(getName())
// Bookmarked

// Hoping to get to this today.
// 11-8-2018 Sick. :/
// Stateless functional component
// Moving the component code
// Setup import/export
// Move the imports to that new files (and setup an import here.)