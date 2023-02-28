var checkIfPangram = function (sentence) {
  return new Set(sentence).size == 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
console.log(checkIfPangram("hxsdz"));
console.log(checkIfPangram("anmt"));
console.log(
  checkIfPangram(
    "onrcsnlxckptsxffbyswujpamfltvmdoxovggepknmtacrjkkorjgvgtgaiaudspnpxkwikevmjeephhiyvnoymjwjfopovscbefecnoytjxfwasabwohqujwowmakpyuuqvgfab"
  )
);
