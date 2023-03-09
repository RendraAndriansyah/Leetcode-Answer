var freqAlphabets = function (s) {
  return s
    .match(/\d{2}(?=#)|\d/g)
    .map((num) => String.fromCharCode(96 + +num))
    .join("");
  // ~>
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") result += getLetter(Number(s[i++] + s[i++]));
    else result += getLetter(Number(s[i]));
    console.log(result);
  }
  return result;
};

const getLetter = (num) => {
  return String.fromCharCode(num + 96);
};

console.log(freqAlphabets("10#11#12"));
