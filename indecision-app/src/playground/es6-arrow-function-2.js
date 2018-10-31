// arguments object - no longer bound with arrow functions.

const add = (a, b) => {

    // console.log(arguments)
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound.

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
};

user.printPlacesLived()

console.log(user.printPlacesLived());

// Challenge Area

const multipliyer = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied.
    numbers: [1, 2, 3],
    mutliplyBy: 3,
    multiply () {
        return this.numbers.map((number) => this.mutliplyBy * number)
    }
};

console.log(multipliyer.multiply(1));