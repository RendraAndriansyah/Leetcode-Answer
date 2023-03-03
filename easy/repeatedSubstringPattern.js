var repeatedSubstringPattern = function (s) {
  let sub = "";
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    sub += s[i];
    if (sub.repeat(s.length / sub.length) === s) return true;
  }
  return false;
  // es6 Syntax
  return s.repeat(2).slice(1, -1).includes(s);
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
