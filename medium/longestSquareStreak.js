/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  let data = {};
  nums.sort((a, b) => a - b)
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      if (data[Math.sqrt(nums[i])]) {
          data[nums[i]] = data[Math.sqrt(nums[i])] + 1;
          max = Math.max(data[nums[i]], max);
      } else {
          data[nums[i]] = 1;
      }
  }
  return max === 0 ? -1 : max;
};