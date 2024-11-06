/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
          let firstBinary = nums[i].toString(2).replaceAll('0', '');
          let secondBinary = nums[i + 1].toString(2).replaceAll('0', '');
          if (firstBinary.length !== secondBinary.length) {
              return false;
          }
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
          i--
      }
  }
  for (let q = nums.length - 1; q >= 0; q--) {
      if (nums[q] < nums[q - 1]) {
          let firstBinary = nums[q].toString(2).replaceAll('0', '');
          let secondBinary = nums[q - 1].toString(2).replaceAll('0', '');
          if (firstBinary.length !== secondBinary.length) {
              return false;
          }
          [nums[q], nums[q - 1]] = [nums[q - 1], nums[q]];
          q++
      }
  }
  return true;
};