/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let right = nums.length - 1;
  let left = 0;
  while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid - 1] < nums[mid] &&
          nums[mid + 1] < nums[mid]) {
              return mid;
      } else
      if (nums[mid + 1] >= nums[mid]) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return left;
};