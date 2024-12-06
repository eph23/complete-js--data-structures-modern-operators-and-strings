'use strict';

// Restaurant Data
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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

  openingHours,

  // Object Destructuring as function parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  // Spread Operator as function parameter
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta! with ${ing1}, ${ing2}, and ${ing3}`);
  },

  // Rest operator as function parameter
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Pizza with ${mainIngredient} ${
        otherIngredients.length > 0 ? 'and' : ''
      } ${otherIngredients}`
    );
  },
};

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method dose not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method dose not exists');

const users = [{ name: 'Eph', email: 'abc@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

