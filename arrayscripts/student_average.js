let students = [
  { name: "zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

students.map((item) => {
  let scores = 0;
  let avg = item.scores;
  let lengthOf = avg.length;
  for (let i = 0; i < lengthOf; i++) {
    scores += avg[i] / lengthOf;
  }
  console.log(item.name, scores.toFixed(2));
});

// console.log(sum);
