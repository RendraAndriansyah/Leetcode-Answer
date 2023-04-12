var filter = function (arr, fn) {
  let res = new Array();
  arr.map((x) => {
    if (fn(x)) res.push(x);
  });
  return res;
};
