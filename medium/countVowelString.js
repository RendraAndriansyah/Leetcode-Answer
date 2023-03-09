var countVowelStrings = function (n) {
  let vowel = Array(5).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < 5; j++) {
      vowel[j] = vowel[j] + vowel[j - 1];
    }
  }
  //   console.log(vowel);
  return vowel[4];
};

// console.log(countVowelStrings(1));
console.log(countVowelStrings(2));
// console.log(countVowelStrings(33));
