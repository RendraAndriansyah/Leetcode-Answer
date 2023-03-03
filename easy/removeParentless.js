var removeOuterParentheses = function (s) {
  let level = 0;
  let res = "";

  for (let i = 0; i < s.length; ++i) {
    if (s[i - 1] === "(" && s[i] === "(") {
      level++;
    } else if (s[i - 1] === ")" && s[i] === ")") {
      level--;
    }

    if (level > 0) {
      res += s[i];
    }
  }

  return res;
};

console.log(removeOuterParentheses("(()())(())"));
