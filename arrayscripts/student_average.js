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
  //   lets the scores to a varable
  let avg = item.scores;
  //   gets the length of each scores arr
  let lengthOf = avg.length;
  //   loops over array (stops at length of array)
  for (let i = 0; i < lengthOf; i++) {
    // adds the sum of the array then divide by length of assigned array
    scores += avg[i] / lengthOf;
  }
  //   logs out student name and scores to match
  console.log(item.name, scores.toFixed(2));
});

// console.log(sum);
