/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/
function increasingTriplet(nums: number[]): boolean {
  let smallest = 2 ** 31 - 1;
  let mid = 2 ** 31 - 1;
    for (let i = 0; i < nums.length; i++) {
        if (smallest >= nums[i]) {
            smallest = nums[i]
        } else if ( mid >= nums[i]) {
            mid = nums[i]
        } else {
            return true;
        }
  }
  return false;
};