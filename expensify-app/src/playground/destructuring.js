// object destructuring

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };
//
// const {name: firstName = 'Anon', age } = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${person.age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }
// };
// const {name: publisherName = 'Nobody'} = book.publisher;
// console.log(publisherName);


//
//Array Destructuring
//


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [ , city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [ hot , , price] = item;
// grab first and third items using array destructuring

console.log(`A medium ${hot} costs ${price}`);