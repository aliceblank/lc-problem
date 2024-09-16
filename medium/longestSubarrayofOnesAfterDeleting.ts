/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
*/
function longestSubarray(nums: number[]): number {
  let max = 0;
  let left = 0;
  let deletion = false;
  while (nums[left] === 0) {
    left++;
  }
  for (let right = left; right < nums.length; right++) {
    if (nums[right] === 1 && nums[left] === 1) {
      if (right - left + 1 > max) {
        if (deletion) {
          max = right - left;
        } else {
          max = right - left + 1;
        }
      }
    } else {
        if (deletion) {
          while (nums[left] !== 0) {
            left++
          }
          left ++
          deletion = false;
          right --
        } else {
          deletion = true;
        }
      }
  }
  if (max === nums.length) {
    return max - 1
  }
  return max;
};