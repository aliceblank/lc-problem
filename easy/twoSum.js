/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i]
      if (nums.indexOf(difference) !== -1 && nums.indexOf(difference) !== i) {
        return [i, nums.indexOf(difference)]
      }
  }
};