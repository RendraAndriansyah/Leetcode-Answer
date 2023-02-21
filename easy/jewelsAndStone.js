var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const arrStones = stones.split("");
  arrStones.forEach((e) => {
    if (jewels.includes(e)) result++;
  });
  return result;
};

// ========================
// ~> method function + set
// ========================
// var numJewelsInStones = function (jewels, stones) {
//   const cJewels = new Set(jewels);
//   return stones.split("").reduce((res, stone) => res + cJewels.has(stone), 0);
// };

// ====================
// ~> convert ASCI code
// ====================
// var numJewelsInStones = function (jewels, stones) {
//   //   let res = 0;
//   //   let cJewels = [];
//   //   let cStones = [];
//   //   const length = jewels.length + stones.length;
//   //   for (let i = 0; i < length; i++) {
//   //     if (i < jewels.length) cJewels.push(jewels.codePointAt(i));
//   //     if (i < stones.length) cStones.push(stones.codePointAt(i));
//   //   }
//   //   for (let j = 0; j < jewels.length; j++) {
//   //     for (let k = 0; k < stones.length; k++) {
//   //       if (cJewels[j] === cStones[k]) res++;
//   //     }
//   //   }
//   //   return res;
// };

// ==================================
// ~> solotion 2 using object checked
// ==================================
// var numJewelsInStones = function (jewels, stones) {
//   let obj = {};
//   let result = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     obj[jewels[i]] = true;
//   }

//   for (let j = 0; j < stones.length; j++) {
//     if (obj[stones[j]]) result++;
//   }
//   return result;
// };

console.log(numJewelsInStones("aA", "aAAbbb"));
console.log(numJewelsInStones("z", "ZZ"));
