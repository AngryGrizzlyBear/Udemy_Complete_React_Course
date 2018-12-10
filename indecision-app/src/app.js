import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// };
//
// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page.</p>
//     </div>
// );
//
// ReactDOM.render((
//         <Layout>
//             <div>
//                 <h1>Page Title</h1>
//                 <p>This is my page.</p>
//             </div>
//         </Layout>)
//     , document.getElementById('app'));


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
// Stateless functional components
// Moving the components code
// Setup import/export
// Move the imports to that new files (and setup an import here.)