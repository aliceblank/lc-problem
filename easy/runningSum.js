/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = 0;
  let solution = [];
  nums.forEach((num) => {
      sum += num;
      solution.push(sum);
  })
  return solution;
};