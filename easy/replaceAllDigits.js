var replaceDigits = function (s) {
  let number = "1234567890";
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
    if (number.includes(s[i])) {
      result[i] = String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i]));
    }
  }
  return result.join("");
};

console.log(replaceDigits("a1c1e1"));
