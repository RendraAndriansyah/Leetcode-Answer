var numOfStrings = function (patterns, word) {
  let count = 0;
  for (const words of patterns) {
    if (word.includes(words)) count++;
  }
  return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"));
console.log(numOfStrings(["a", "a", "a"], "ab"));
