// Given an integer array nums, handle multiple queries of the following types:

// Update the value of an element in nums.
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// void update(int index, int val) Updates the value of nums[index] to be val.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.n = nums.length
  this.tree = new Array(this.n * 2)
  this.tree.fill(0);
  for (let i = this.n; i < this.tree.length; i++) {
    this.tree[i] = nums[i-this.n];
  }
  for (let i = (this.n-1); i > 0; i--) {
    this.tree[i] = this.tree[i*2] + this.tree[(i*2) + 1]
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  let n = this.n
  index += this.n;
  this.tree[index] = val;
  while (index > 1) {
    let left = index;
    let right = index;
    if (index % 2 === 0) {
      right = index + 1
    } else {
      left = index - 1
    }
    index = Math.floor(index / 2)
    this.tree[index] = this.tree[left] + this.tree[right]
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let n = this.n;
  left += n;
  right += n;
  let sum = 0;
  while (left <= right) {
    if (left % 2 === 1) {
      sum += this.tree[left];
      left++
    }
    if (right % 2 === 0) {
      sum += this.tree[right];
      right--;
    }
    left = Math.floor(left / 2)
    right = Math.floor(right / 2)
  }
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */