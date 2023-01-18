/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let pivot = -1;
  let leftSum = 0;
  nums.forEach((num, index) => {
      let rightSum = 0;
      rightNums = nums.slice(index + 1);
      rightNums.forEach((rightNum) => {
          rightSum += rightNum
      })
      if (rightSum === leftSum && pivot === -1) {
          pivot = index
      }
      leftSum += num;
  })
  return pivot;
};