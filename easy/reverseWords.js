var reverseWords = function (s) {
  let result = "";
  let sentence = "";
  for (let word of s) {
    if (word === " ") {
      result += sentence + word;
      sentence = "";
    } else {
      sentence = word + sentence; // reverse sentence
    }
  }
  return (result += sentence);
  // ~> one liner
  // return s
  //   .split(" ")
  //   .map((x) => x.split("").reverse().join(""))
  //   .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
