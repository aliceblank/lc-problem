/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let jewelRecord = {}
  for (let i = 0; i < jewels.length; i++) {
      jewelRecord[jewels[i]] = true;
  }
  let amount = 0;
  for (let q = 0; q < stones.length; q++) {
      if (jewelRecord[stones[q]]) {
          amount++;
      }
  }
  return amount;
};