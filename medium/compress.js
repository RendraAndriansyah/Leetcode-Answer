var compress = function (chars) {
  let i = 0,
    j = 0,
    count = 0;
  while (i < chars.length) {
    if (chars[i] === chars[j++]) {
      count++;
    } else {
      if (count > 1) chars.splice(++i, count - 1, ...count.toString().split(""));
      i += count.toString().length;
      j = i;
      count = 0;
    }
  }

  return i;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
