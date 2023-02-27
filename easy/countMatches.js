var countMatches = function (items, ruleKey, ruleValue) {
  const item = {
    type: 0,
    color: 1,
    name: 2,
  };
  return items.filter((x) => x[1] === "blue");
  // ~> my solution
  //   let count = 0;
  //   let key = 0;
  //   if (ruleKey === "type") key = 0;
  //   if (ruleKey === "color") key = 1;
  //   if (ruleKey === "name") key = 2;
  //   items.forEach((e) => {
  //     e[key] === ruleValue ? count++ : count;
  //   });
  //   console.log(items);
  //   console.log(ruleKey);
  //   console.log(ruleValue);
  //   return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    (ruleKey = "color"),
    (ruleValue = "silver")
  )
);

console.log(
  countMatches(
    [
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
    ],
    "name",
    "qqqq"
  )
);
