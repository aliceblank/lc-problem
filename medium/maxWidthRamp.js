/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  //i has to be the lowest and j has to be the highest it can be
  let maxWidth = 0;
  if (nums.length < 2) {
      return 0;
  } else {
      let stack = [0];
      let top = stack.length - 1;
      for (let i = 0; i < nums.length; i++) {
          if (nums[stack[top]] > nums[i]) {
              stack.push(i);
              top++;
          }
      }
      for (let j = nums.length - 1; j >= 0; j--) {
          while (stack.length > 0 && nums[stack[top]] <= nums[j]) {
              maxWidth = Math.max(maxWidth, j - stack.pop());
              top--;
          }
      }
      return maxWidth;
  }
};