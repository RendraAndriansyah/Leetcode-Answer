var strStr = function (haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};

console.log(strStr("sadbutsad", "sad"));
