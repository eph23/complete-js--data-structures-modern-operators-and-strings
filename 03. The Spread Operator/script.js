'use strict';

// Restaurant Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Array Destructuring as function parameter
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Object Destructuring as function parameter
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  // Spread Operator as function parameter
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta! with ${ing1}, ${ing2}, and ${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// The Spread Operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

// Creating new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy or array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterating arrays, strings, maps, sets
const str = 'Ephraim';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt(`Lets make pasta! Add your ingredients. Ingredient 1?`),
//   prompt(`Lets make pasta! Add your ingredients. Ingredient 2?`),
//   prompt(`Lets make pasta! Add your ingredients. Ingredient 1?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Spread operator with objects
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(newRestaurant.name);
console.log(restaurantCopy.name);
