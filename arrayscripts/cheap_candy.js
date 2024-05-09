"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Gummy yeets", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "milk duds", price: 10.79 },
  { product: "dots", price: 1.25 },
  { product: "chick O stick", price: 5.79 },
  { product: "pixy sticks", price: 1.79 },
  { product: "short cake", price: 8.79 },
  { product: "tarts", price: 3.79 },
];

let product;
let name;
let fish;

product = products.filter((filter) => filter.price > 4);
name = products.filter((filter) => filter.product.includes("M&Ms"));
fish = products.filter((filter) => {
  if (filter.product.includes("Swedish Fish")) {
    return "yes";
  }
});

console.log(
  `Wich candies cost less than $4.00? ${product.map(
    (product) => product.product
  )}\n`
);

console.log(
  `Wich candies has M&M its name: ${name.map((name) => name.product)} \n`
);
console.log(`do we carry "Swedish Fish"? ${fish.length > 0 ? "yes" : "no"}`);
