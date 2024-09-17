/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
*/
function findDifference(nums1: number[], nums2: number[]): number[][] {
    let answer1: number[] = [];
    let answer2: number[] = [];
    let object1 = {};
    let object2 = {};
    for (let i = 0; i < nums1.length; i++) {
        object1[nums1[i]] = true;
    }
    for (let q = 0; q < nums2.length; q++) {
        if (!object1[nums2[q]]) {
            answer2.push(nums2[q]);
            object1[nums2[q]] = true;
        }
        object2[nums2[q]] = true;
    }
    for (let x = 0; x < nums1.length; x++) {
        if (!object2[nums1[x]]) {
            answer1.push(nums1[x])
          object2[nums1[x]] = true;
        }
    }
    return [answer1, answer2]
};