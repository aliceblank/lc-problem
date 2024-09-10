/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let end = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    n--
    return n <= 0
  }
  while (n >  0 && !end) {
    for (let i = 0; i < flowerbed.length; i++) {
      if (i === 0) {
        if (flowerbed[i] === 0 &&
          flowerbed[i+1] === 0) {
            flowerbed.splice(i, 1, 1)
            n--
          }
      } else
      if (flowerbed[i] === 0 &&
        flowerbed[i+1] === 0 &&
        (flowerbed[i+2] === 0 ||
        i + 2 >= flowerbed.length)) {
          flowerbed.splice(i + 1, 1, 1)
          n--;
        }
      if (i + 1 === flowerbed.length) {
          end = 1;
      }
    }
  }
  return (n <= 0)
};