function canJump(nums: number[]): boolean {
  let gas = nums[0];
  for (let i = 0; i < nums.length; i++) {
      if (gas < 0) {
          return false
      } else if (nums[i] > gas) {
          gas = nums[i]
      }
      gas--
  }
  return true;
};