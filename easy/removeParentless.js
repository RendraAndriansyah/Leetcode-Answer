var removeOuterParentheses = function (s) {
  let convert = s.split("").map((x) => [x]);
  let res = "";
  for (let i = 0; i < convert.length; i++) {
    if (convert[i] == convert[i + 1]) res += convert[i];
  }
  console.log(res);
};

console.log(removeOuterParentheses("(()())(())"));
