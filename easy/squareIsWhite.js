var squareIsWhite = function (coordinates) {
  return coordinates.charCodeAt(0) % 2 !== coordinates.charCodeAt(1) % 2;
};

console.log(squareIsWhite("a1")); // black false
console.log(squareIsWhite("b1"));
console.log(squareIsWhite("a2"));
console.log(squareIsWhite("b2"));

console.log(squareIsWhite("f1"));
console.log(squareIsWhite("e1"));
