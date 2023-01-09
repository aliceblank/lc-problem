//Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

//Return the maximum difference. If no such i and j exists, return -1.


const maximumDifference = (nums) => {
  let lowest = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        let trial = (nums[j]-nums[i]);
        if (lowest === -1) {
          lowest = trial;
        }
        if (lowest < trial) {
          lowest = trial;
        }
      }
    }
  }
  return lowest
}