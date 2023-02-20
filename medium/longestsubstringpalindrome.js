// ~> uncomplete

var longestPalindrome = function (s) {
  let temp = s.split("");
  let palindrome = s.split("").reverse();
  let result = "";
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === palindrome[i] && temp[i - 1] === palindrome[i - 1]) {
      result += temp[i];
    }
  }

  return result;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("abcda"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("cbbd"));
