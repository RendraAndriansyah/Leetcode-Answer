var numberOfSteps = function (num) {
  // ~> optimization
  let res = 0;
  while (num > 0) {
    num % 2 === 0 ? (num /= 2) : num--;
    res++;
  }
  return res;

  // ~> my first solution
  let count = 0;
  let step = num;
  for (let i = num; i > 0; i--) {
    if (step == 0) break;
    if (step % 2 === 0) {
      count++;
      step /= 2;
    } else {
      count++;
      step -= 1;
    }
  }
  return count;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
