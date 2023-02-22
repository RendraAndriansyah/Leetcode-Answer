var interpret = function (command) {
  // ~>
  return command.replaceAll("()", "o").replaceAll("(al)", "al");

  // ~> traditional way
  //   let res = "";
  //   for (let i = 0; i < command.length; i++) {
  //     if (command[i] !== "(" && command[i] !== ")") res += command[i];
  //     if (command[i] === "(" && command[i + 1] === ")") res += "o";
  //   }
  //   return res;
};

console.log(interpret("G()(al)"));
console.log(interpret("G()()()()(al)"));
console.log(interpret("(al)G(al)()()G"));
