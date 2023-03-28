var isAnagram = function (s, t) {
  return t.split("").sort().join("") === s.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
