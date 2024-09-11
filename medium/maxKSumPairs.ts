/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
*/
function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let ops = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === k) {
      ops++;
      left++;
      right--;
    } else if (nums[left] + nums[right] > k) {
      right --
    } else {
      left ++
    }
  }
  return ops;
};