//~> unfinished
var frequencySort = function (s) {
  let temp = s
    .split("")
    .map((x) => String(x).charCodeAt(x))
    .sort((a, b) => a - b);

  return temp;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
