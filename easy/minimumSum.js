var minimumSum = function (num) {
  let numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(~~num % 10);
    num /= 10;
  }
  console.log(numbers);
  const sorted = numbers.sort((x, y) => y - x);
  console.log(sorted);
  return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);

  // ~> ES6 method solution 2 line
  const temp = num.toString().split("").sort();
  return parseInt(temp[0] + temp[2]) + parseInt(temp[1] + temp[3]);

  // ~> my solution (unfinished)
  //   const convert = num.toString().split("");
  //   const newArr = [];
  //   let res = 0
  //   for (let i = 0; i <= convert.length; i++) {
  //     for (let j = 0; j < i; j++) {
  //       newArr.push(convert.slice(j, i).join([]));
  //       if(newArr+ newArr[i])
  //     }
  //   }
  //   return newArr;
};

console.log(minimumSum([2932]));
// console.log(minimumSum([4009]));
