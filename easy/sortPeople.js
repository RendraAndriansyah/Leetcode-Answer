var sortPeople = function (names, heights) {
  return names
    .map((name, i) => ({ name: names[i], heights: heights[i] }))
    .sort((a, b) => b.heights - a.heights)
    .map((x) => x.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
