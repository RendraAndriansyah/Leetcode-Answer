var findAndReplacePattern = function (words, pattern) {
  const convert = (pattern) => {
    let result = "";

    for (let i = 0; i < pattern.length; i++) {
      result += pattern.indexOf(pattern[i]);
    }
    return result;
  };

  const converted = convert(pattern);
  return words.filter((x) => convert(x) === converted);
};

console.log(findAndReplacePattern(["abc", "deq", "emm", "aqq", "dkd", "ccc"], "abb"));
