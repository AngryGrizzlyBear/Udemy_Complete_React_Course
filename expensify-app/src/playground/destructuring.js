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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
};
const {name: publisherName = 'Nobody'} = book.publisher;
console.log(publisherName);