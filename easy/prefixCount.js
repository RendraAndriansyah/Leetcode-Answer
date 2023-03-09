var prefixCount = function (words, pref) {
  // ~> single line
  return words.filter((x) => x.startsWith(pref)).length;

  // ~> my first solution
  //   let count = 0;
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i].slice(0, pref.length) === pref) count++;
  //   }
  //   return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
