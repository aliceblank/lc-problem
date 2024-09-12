/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/
function findMaxAverage(nums: number[], k: number): number {
  let max;
  let left = 0;
  let average = 0;
  for (let i = 0; i < nums.length; i++) {
    average += nums[i]
    if (i - left + 1 === k) {
        if (!max) {
          max = average / k
        } else {
          max = Math.max(max, average/k)
        }
        average -= nums[left]
        left ++
        }
    }
  return max;
};