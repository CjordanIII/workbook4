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
// by name
products.sort((a, b) =>
  a.product.toLowerCase() > b.product.toLowerCase() ? 1 : -1
);
console.log(products);
// by price
console.log("---------------------------------");
products.sort((a, b) => b.price - a.price);
console.log(products);
