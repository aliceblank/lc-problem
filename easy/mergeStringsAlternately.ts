/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/
function mergeAlternately(word1: string, word2: string): string {
  let solution = ''
  if (!word1.length) {
    return word2;
  }
  for (let i = 0; i < word1.length; i++) {
    solution += word1[i];
    if (word2[i]) {
      solution += word2[i]
    }
    if (!word1[i + 1] && word2[i + 1]) {
      for (let q = i + 1; q < word2.length; q++) {
        solution += word2[q];
      }
    }
  }
  return solution
};