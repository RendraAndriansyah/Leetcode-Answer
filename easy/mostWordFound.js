var mostWordsFound = function (sentences) {
  // my solution using map
  let temp = [];
  sentences.map((x) => temp.push(x.split(" ").length));
  return Math.max(...temp);

  // ~> my solution using forEach & ternarry
  //   let res = 0;
  //   sentences.forEach((e) => {
  //     length = e.split(" ").length;
  //     res < length ? (res = length) : res;
  //   });
  //   return res;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);

console.log(
  mostWordsFound([
    "w jrpihe zsyqn l dxchifbxlasaehj",
    "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
    "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
    "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
    "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
    "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
    "qstd zui nbbohtuk",
    "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
  ])
);
