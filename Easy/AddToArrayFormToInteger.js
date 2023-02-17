let num = [1, 2, 0, 0];
let k = 34;

const result = (num, k) => {
  let sum = "";
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  let temp = BigInt(sum) + BigInt(k);
  const result = String(temp)
    .split("")
    .map((toNumber) => Number(toNumber));

  return result;
};
console.log(result(num, k));
