/*
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
*/
var findRepeatedDnaSequences = function(s) {
  let dictionary = {};
  let output = [];
  let right = 10;
  for (let i = 0; i < s.length - 9; i++) {
      let currentSequence = s.slice(i, right);
      if (dictionary[currentSequence] === 1) {
          output.push(currentSequence);
          dictionary[currentSequence]++;
      } else if (!dictionary[currentSequence]) {
          dictionary[currentSequence] = 1;
      }
      right++;
  }
  return output;
};