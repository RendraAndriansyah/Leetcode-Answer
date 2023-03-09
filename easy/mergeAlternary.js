var mergeAlternately = function (word1, word2) {
  let result = "";
  let length;
  word1.length >= word2.length ? (length = word1.length) : (length = word2.length);
  for (let i = 0; i < length; i++) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
  }
  return result;
};

console.log(mergeAlternately("abcd", "pqr"));
