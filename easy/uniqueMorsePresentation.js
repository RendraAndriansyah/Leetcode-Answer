var uniqueMorseRepresentations = function (words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let transformations = new Set();

  for (let word of words) {
    let trans = "";
    for (let letter of word) {
      let index = letter.charCodeAt() - 97;
      trans += morse[index];
    }

    transformations.add(trans);
  }

  return transformations.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"]));
