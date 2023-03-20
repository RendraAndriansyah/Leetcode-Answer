const canPlaceFlower = (flowerbed, n) => {
  flowerbed = [0, ...flowerbed, 0];

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlower([1, 0, 0, 0, 1], 1)); // true
