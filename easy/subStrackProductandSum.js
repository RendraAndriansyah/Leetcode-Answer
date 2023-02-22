var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  let convert = String(n);
  for (let i = 0; i < convert.length; i++) {
    product *= convert[i];
    sum += Number(convert[i]);
  }

  return product - sum;

  //~> using forEach
  //   let product = 1;
  //   let sum = 0;
  //   n.toString()
  //     .split("")
  //     .forEach((e) => {
  //       product *= Number(e);
  //       sum += Number(e);
  //     });
  //   return product - sum;
};

// console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
