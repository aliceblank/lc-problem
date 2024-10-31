/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let output = []
  for (let left = 0; left < nums.length; left++) {
      if (nums[left] === nums[left - 1]) {
          continue
      }
      let mid = left + 1
      let right = nums.length - 1
      while (mid < right) {
      if (nums[left] + nums[mid] + nums[right] === 0) {
          output.push([nums[left], nums[mid], nums[right]])
          mid++
          while (nums[mid] === nums[mid - 1]) {
              mid++
          }
      }
      if (nums[left] + nums[mid] + nums[right] > 0) {
          right--
      }
      if (nums[left] + nums[mid] + nums[right] < 0) {
          mid++
      }
  }
  }
  return output;
};