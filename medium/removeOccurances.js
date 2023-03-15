var removeOccurrences = function (s, part) {
  let res = s;
  while (res.includes(part)) {
    res = res.replace(part, "");
  }
  return res;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
