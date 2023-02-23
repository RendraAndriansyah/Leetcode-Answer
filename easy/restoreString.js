var restoreString = function (s, indices) {
  const res = [];
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
  //   ~>  my solution
  const result = [];
  const temp = [];
  for (let i = 0; i < indices.length; i++) {
    temp.push([indices[i], s[i]]);
  }
  result.push(
    temp
      .sort((a, b) => a[0] - b[0])
      .map((x) => x[1])
      .join("")
  );
  return String(result);
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("vttqexwqgdc", [9, 5, 8, 0, 4, 3, 6, 10, 1, 2, 7]));
