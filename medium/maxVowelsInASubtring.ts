/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

function maxVowels(s: string, k: number): number {
  const letters = s.split('')
  let max = 0;
  let left = 0;
  let numberOfVowels = 0;
  for (let right = 0; right < letters.length; right++) {
    if (letters[right] === 'a' ||
        letters[right] === 'e' ||
        letters[right] === 'i' ||
        letters[right] === 'o' ||
        letters[right] === 'u') {
          numberOfVowels++;
        }
    if (right - left + 1 === k) {
      if (numberOfVowels > max) {
        max = numberOfVowels;
      }
      if (letters[left] === 'a' ||
      letters[left] === 'e' ||
      letters[left] === 'i' ||
      letters[left] === 'o' ||
      letters[left] === 'u') {
        numberOfVowels--;
      }
      left++
    }
  }
  return max;
};