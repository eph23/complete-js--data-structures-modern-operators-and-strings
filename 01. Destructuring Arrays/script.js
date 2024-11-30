'use strict';

// Restaurant Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Destructuring as function parameter
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

// Skipping value
let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

// Swapping/switching value
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

// Destructuring as function parameter
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested array
const nestedArr = [2, 4, [5, 6]];
const [i, , j] = nestedArr;
console.log(i, j);

const [p, , [q, r]] = nestedArr;
console.log(p, q, r);

// Default values
const [e = 1, f = 1, g = 1] = [8, 9];
console.log(e, f, g);
