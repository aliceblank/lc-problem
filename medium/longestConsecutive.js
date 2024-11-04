/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {};
  nums.sort((a, b) => a - b)
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      let seqLength = 1;
      while (nums[i] + 1 === nums[i + 1] || nums[i] === nums[i + 1]){
          if (nums[i] === nums[i + 1]) {
              i++
          } else {
              seqLength++
              i++
          }
      }
      max = Math.max(seqLength, max)
  }
  return max;
};

// O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {}
  let max = 0;
  for (let num in nums) {
      map[nums[num]] = true;
  }
  for (let idx in nums) {
      if (!map[nums[idx] - 1]) {
          let sequence = 1;
          while (map[nums[idx] + sequence]) {
              sequence++;
          }
          max = Math.max(sequence, max)
      }
  }
  return max;
};

var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let idx in nums) {
      if (!set.has(nums[idx] - 1)) {
          let sequence = 1;
          while (set.has(nums[idx] + sequence)) {
              sequence++;
          }
          max = Math.max(sequence, max)
      }
  }
  return max;
};