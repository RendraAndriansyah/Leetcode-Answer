var percentageLetter = function (s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) count++;
  }
  return Math.round((count * 100) / s.length);
};

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("sgawtb", "s"));
