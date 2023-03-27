var findWords = function (words) {
  // regex solution
  return words.filter((w) => {
    if (
      !/^[qwertyuiop]*$/i.test(w) &&
      !/^[asdfghjkl]*$/i.test(w) &&
      !/^[zxcvbnm]*$/i.test(w)
    )
      return false;

    return true;
  });
};

console.log(findWords(["asd"]));
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
