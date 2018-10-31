'use strict';

// arguments object - no longer bound with arrow functions.

var add = function add(a, b) {

    // console.log(arguments)
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound.

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

user.printPlacesLived();

console.log(user.printPlacesLived());

// Challenge Area

var multipliyer = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied.
    numbers: [1, 2, 3],
    mutliplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.mutliplyBy * number;
        });
    }
};

console.log(multipliyer.multiply(1));
