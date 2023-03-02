var sortPeople = function (names, heights) {
  // with object temporary
  let obj = [];
  for (let i = 0; i < names.length; i++) {
    obj.push({ names: names[i], heights: heights[i] });
  }
  return obj.sort((a, b) => b.heights - a.heights).map((item) => item.names);

  // ~> using hashMap ES6
  return names
    .map((x, i) => ({ name: names[i], heights: heights[i] }))
    .sort((a, b) => b.heights - a.heights)
    .map((x) => x.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
