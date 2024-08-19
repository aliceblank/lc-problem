function jump(nums: number[]): number {
  let index = 0
  let numberOfJumps = 0
  const target = nums.length - 1
  if (!target) {
    return 0
  }
  while (index !== nums.length - 1) {
    if (index + nums[index] >= target) {
      return numberOfJumps + 1
    }
    const arrOfChoices = nums.slice(index + 1, index + nums[index] + 1)
    let maxJump = 0;
    let maxJumpIndex = 0;
    for (let i = 0; i < arrOfChoices.length; i++) {
        let jumpOption = i + arrOfChoices[i];
        if (jumpOption >= maxJump) {
            maxJump = jumpOption;
            maxJumpIndex = index + i + 1
        }
    }
    index = maxJumpIndex;
    numberOfJumps++
  }
  return numberOfJumps
};
