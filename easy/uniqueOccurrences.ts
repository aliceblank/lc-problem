/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/
function uniqueOccurrences(arr: number[]): boolean {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
      if (!counter[arr[i]]) {
          counter[arr[i]] = 1;
      } else {
          counter[arr[i]]++
      }
  }
  let key = {}
  for (let q = 0; q < Object.keys(counter).length; q++) {
      if (!key[counter[Object.keys(counter)[q]]]) {
          key[counter[Object.keys(counter)[q]]] = true;
      } else {
          return false;
      }
  }
  return true;
};