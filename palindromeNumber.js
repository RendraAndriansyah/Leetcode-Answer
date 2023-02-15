var isPalindrome = function (x) {
  const convert = [String(x).split("").reverse().join("")];
  const result = x === Number(convert[0]) ? true : false;

  return result;
};

console.log(isPalindrome(10101)); // true
console.log(isPalindrome(2212)); // false
console.log(isPalindrome(20102)); // true
console.log(isPalindrome(3131)); // false
