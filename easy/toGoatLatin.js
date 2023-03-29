var toGoatLatin = function (sentence) {
  let convert = sentence.split(" ");
  const checker = "aeiouAEIOU";
  for (let i = 0; i < convert.length; i++) {
    if (checker.includes(convert[i][0])) {
      convert[i] += "m" + "a".repeat(i + 2);
    } else {
      convert[i] += convert[i][0] += "m" + "a".repeat(i + 2);
      convert[i] = convert[i].slice(1);
    }
  }
  return convert.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));
