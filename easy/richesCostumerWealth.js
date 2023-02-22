var maximumWealth = function (accounts) {
  // ~> forEach & reduce
  //   let ans = 0;
  //   accounts.forEach((item) => {
  //     console.time(ans);
  //     let temp = item.reduce((acc, prev) => {
  //       return acc + prev;
  //     }, 0);
  //     ans = Math.max(ans, temp);
  //   });
  //   console.timeEnd(ans);
  //   return ans; // speed 0.049ms & 0.003ms

  // ~> my solution
  let res = 0;
  for (let i = 0; i < accounts.length; i++) {
    console.time(res);
    if (accounts[i].reduce((a, c) => a + c) >= res)
      res = accounts[i].reduce((a, c) => a + c);
  }
  console.timeEnd(res);
  return res; // speed 0.056 & 0.004
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [1, 2, 3],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
