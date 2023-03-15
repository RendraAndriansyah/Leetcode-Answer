const sample = [["muhammad"], ["rendra"], ["andriansyah"]];

const test = (item) => {
  return item.filter((x) => x[0].includes("nd")).map((x) => x); // rendra, andriansyah
};

console.log(test(sample));
