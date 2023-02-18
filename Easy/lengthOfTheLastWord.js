var lengthOfLastWord = function (s) {
  let result = "";
  let convert = s.split(" ");
  for (let i = 0; i < convert.length; i++) {
    if (convert[i].length === 0) continue;
    result = convert[i];
  }
  return result.length;
};

console.log(lengthOfLastWord("hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
