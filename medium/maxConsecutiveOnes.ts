/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/
function longestOnes(nums: number[], k: number): number {
  let max = 0;
  let left = 0;
  let swaps = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
    if (right - left + 1 > max) {
      max = right - left + 1;
    }
    }
    if (nums[right] === 0) {
      if (swaps < k) {
        swaps++
        if (right - left + 1 > max) {
        max = right - left + 1;
        }
      } else {
        while (nums[left] === 1) {
          left++
        }
        left++
        right--
        swaps--
      }
    }
  }
  return max;
};