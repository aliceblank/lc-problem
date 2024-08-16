//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const sorter = (a, b) => {
      if (a < b) {
        return -1
      }
      else {
        return 1
      }
    }
    while (nums2.length) {
      nums1.splice(nums1.indexOf(0), 1, nums2[0])
      nums2.shift()
      nums1.sort(sorter)
    }
};