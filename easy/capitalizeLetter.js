var capitalizeTitle = function (title) {
  let res = [];
  const convert = title.split(" ");
  for (let i = 0; i < convert.length; i++) {
    if (convert[i].length > 2) {
      res.push(convert[i][0].toUpperCase() + convert[i].slice(1).toLowerCase());
    } else {
      res.push(convert[i]);
    }
  }
  return res.join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
