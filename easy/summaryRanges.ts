function summaryRanges(nums: number[]): string[] {
  let ranges : string[] = [];
  let initialValue: undefined | number;
  for (let i = 0; i < nums.length; i++) {
    if (initialValue === undefined) {
      initialValue = nums[i];
    }
    if (nums[i + 1] !== (nums[i]+1)) {
      let solutionString = ''
      if (nums[i] === initialValue) {
        solutionString += nums[i]
      } else {
        solutionString += (initialValue + '->' + nums[i])
      }
      initialValue = undefined;
      ranges.push(solutionString)
    }
  }
  return ranges;
};