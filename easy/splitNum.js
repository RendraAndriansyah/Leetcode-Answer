var splitNum = function (num) {
  let convert = String(num)
    .split("")
    .map((x) => Number(x))
    .sort();

  let temp1 = "";
  let temp2 = "";
  for (const i in convert) {
    i % 2 === 0 ? (temp1 += convert[i]) : (temp2 += convert[i]);
  }

  return Number(temp1) + Number(temp2);
};

console.log(splitNum(4325));
console.log(splitNum(11));
