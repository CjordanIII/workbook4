"use strict";

let lunch = [
  { item: "steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];
let sum = 0;
lunch.forEach((item) => {
  sum += item.price;
});

const tax = 0.08;
const tip = 0.18;
const total = sum + sum * tax + sum * tip;

console.log(`base price: ${sum}
tax: ${(sum * tax).toFixed(2)}
tip: ${(sum * tip).toFixed(2)}
total: ${total.toFixed(2)}`);
