"use strict";

// name
// address
// city
// state
// zip

const person = {
  name: "clarence",
  address: " 123 yo mama street",
  city: "new york",
  state: "new york",
  zip: "6969",
};

function printContact(contact) {
  const { name, address, city, state, zip } = contact;
  console.log(name, address, city, state, zip);
}

printContact(person);
