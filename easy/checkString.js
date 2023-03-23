var checkString = function (s) {
  return s.includes("ba") ? false : true;

  //   return s.indexOf("ba") === -1;
};

console.log(checkString("aaabbb"));
console.log(checkString("abab"));
