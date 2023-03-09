var reversePrefix = function (word, ch) {
  const result = [];
  let left = 0;
  for (let i = 0; i < word.length; i++) {
    left++;
    result.push(word[i]);
    if (word[i] === ch) {
      result.reverse();
      break;
    }
  }
  for (; left < word.length; left++) {
    result.push(word[left]);
  }
  return result.join("");
};

console.log(reversePrefix("abcdefd", "d"));
