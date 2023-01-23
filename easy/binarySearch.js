//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

//You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, mid) {
  if (nums.length % 2) {
    var halfway = (nums.length + 1)/2;
  } else {
    var halfway = nums.length/2;
  }
  var mid = mid + halfway || halfway
  if (nums.length === 1) {
    if (nums[0] === target) {
      return mid - 1;
    } else {
      return -1;
    }
  }
  if (target > nums[halfway]) {
    let secondHalf = nums.slice(halfway, nums.length);
    return search(secondHalf, target, mid);
  }
  if (target < nums[halfway]) {
    let firstHalf = nums.slice(0, halfway);
    return search(firstHalf, target, mid - halfway);
  }
  if (target === nums[halfway]) {
    return mid;
  }
};