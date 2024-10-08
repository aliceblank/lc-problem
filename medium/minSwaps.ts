/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let goodBrackets = 0;
  let badBrackets = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      goodBrackets++
    } else {
      badBrackets++
    }
    max = Math.max(max, badBrackets - goodBrackets)
  }
  return Math.ceil(max/2);
};
// var minSwaps = function(s) {
//   let split = s.split('');
//   let left = 0;
//   let right = s.length - 1;
//   let swaps = 0;
//   while (left < right) {
//     if (split[left] === '[') {
//       if (split[left + 1] === ']') {
//         left += 2;
//       } else {
//         left++;
//       }
//     } else if (split[left] === ']') {
//       while (split[right] === ']') {
//         if (split[right - 1] === '[') {
//           right-=2
//         } else {
//           right--;
//         }
//         split[left] = split[right];
//         split[right] = ']';
//         swaps++
//       }
//     }
//     left++;
//   }
//   return swaps;
// };