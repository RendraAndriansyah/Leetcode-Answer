var canBeTypedWords = function (text, brokenLetters) {
  const textMap = text.split(" ");
  const checker = brokenLetters.split("");
  let result = textMap.length;
  for (let i = 0; i < textMap.length; i++) {
    for (let j = 0; j < brokenLetters.length; j++) {
      if (textMap[i].includes(checker[j])) {
        result--;
        break;
      }
    }
  }
  return result;
};

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
