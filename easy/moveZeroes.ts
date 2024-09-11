/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
function moveZeroes(nums: number[]): void {
  let counter = 0;
  for (let i = 0; i < nums.length - counter; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      counter++;
      i--;
    }
  }
};