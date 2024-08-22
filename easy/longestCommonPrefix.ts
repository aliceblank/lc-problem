/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
      let solution = '';
  let index = 0;
  let currentLetter = strs[0][0]
  if (!currentLetter) {
    return solution;
  }
  while (currentLetter.length) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][index] !== currentLetter) {
        currentLetter = ''
        return solution;
      }
      if (i === strs.length -1) {
        solution += currentLetter;
        if (strs[0].length <= index + 1) {
          return solution;
        }
        index++
        currentLetter = strs[0][index]
        i = 0;
      }
    }
  }
  return solution;
};