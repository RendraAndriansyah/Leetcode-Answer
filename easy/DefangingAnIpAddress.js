var defangIPaddr = function (address) {
  let temp = address.split("");
  let result = [];
  for (let i = 0; i < temp.length; i++) {
    result.push(temp[i]);
    if (temp[i + 1] === ".") result.push("[");
    if (temp[i] === ".") result.push("]");
  }
  return result.join("");

  // ~> regex solution
  // return address.replace(/\./g, "[.]")
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.10"));
