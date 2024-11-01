/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {};
  nums.sort((a, b) => a - b)
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      let seqLength = 1;
      while (nums[i] + 1 === nums[i + 1] || nums[i] === nums[i + 1]){
          if (nums[i] === nums[i + 1]) {
              i++
          } else {
              seqLength++
              i++
          }
      }
      max = Math.max(seqLength, max)
  }
  return max;
};