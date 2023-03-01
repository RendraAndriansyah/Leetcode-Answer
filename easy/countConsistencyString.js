var countConsistentStrings = function (allowed, words) {
  let res = 0;
  for (let i of words) {
    if (i.split("").every((word) => allowed.includes(word))) {
      res++;
    }
  }
  return res;

  //~> regex solution
  const regex = new RegExp(`^[${allowed}]+$`);
  let count = 0;

  words.forEach((word) => {
    if (word.match(regex)) count++;
  });

  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
