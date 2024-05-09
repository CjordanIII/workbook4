"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];
// certain id number
const Id187 = academyMembers.filter((item) => item.memID === 187);
// more than three movies
const filmsOfActor = academyMembers.filter((item) => item.films.length >= 3);
// gets bob
const nameOfActor = academyMembers.filter((item) => item.name.includes("Bob"));

// get films that start with A
const filmWithA = academyMembers.map((item) =>
  item.films.filter((item) => item.includes("A"))
);
const getName = filmWithA.reduce((acc, item) => (acc += item));
const actorNameThatDidFilmsThatStartedWithA = academyMembers.map((item) => {
  if (getName) {
    return item.name;
  }
});
// certain id number
console.log(
  `Who is the Academy Member whose ID is 187?: ${Id187.map(
    (item) => item.name
  )}`
);
// more than three movies
console.log(
  `Who has have been in at least 3 films?:${filmsOfActor.map(
    (name) => name.name
  )} `
);
// gets bob
nameOfActor.forEach((filmsof) => {
  console.log(`Who has a name that starts with "Bob"? ${filmsof.name}`);
});
// get films that start with A
console.log(`HARDER: Which Academy Members have been in a film
// that starts with "A"? ${actorNameThatDidFilmsThatStartedWithA.map(
  (item) => item
)} `);
