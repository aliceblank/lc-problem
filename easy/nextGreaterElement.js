/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let greaters = {}
  let output = [];
  for (let i = 0; i < nums2.length; i++) {
   if (i === nums2.length - 1) {
       greaters[nums2[i]] = -1;
   }
   for (let q = i + 1; q < nums2.length; q++) {
       if (nums2[q] > nums2[i]) {
           greaters[nums2[i]] = nums2[q];
           q = nums2.length;
       }
       if (q === nums2.length - 1) {
           greaters[nums2[i]] = -1;
       }
   }
  }
  for (let z = 0; z < nums1.length; z++) {
   output.push(greaters[nums1[z]])
  }
  return output;
};