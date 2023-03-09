var halvesAreAlike = function (s) {
  let sum = 0;
  const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length / 2; i++)
    sum += vowels.has(s[i]) - vowels.has(s[s.length - 1 - i]);
  return !sum;
  // unfinished
  const checker = ["a", "e", "i", "o", "u"];
  let firstHalf = s
    .toLowerCase()
    .split("")
    .slice(0, s.length / 2);
  let secondHalf = s
    .toLowerCase()
    .split("")
    .slice(s.length / 2);

  return checker.includes(firstHalf[firstHalf.length - 1] && secondHalf[0]);
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("BOOK"));
console.log(halvesAreAlike("textbook"));
