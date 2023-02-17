var longestCommonPrefix = function (strs) {
  for (let i = 0; i <= strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["rendra", "rendri", "rendi"]));
console.log(longestCommonPrefix(["rendra", "rendri", "reno"]));
