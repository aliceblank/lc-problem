/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let comp = '';
  let counter = 1
  let currentLetter = word[0];
  for (let i = 1; i < word.length + 1; i++) {
      if (currentLetter !== word[i] || counter === 9) {
          comp += `${counter}${currentLetter}`;
          currentLetter = word[i];
          counter = 1;
      } else {
          counter++;
      }
  }
  return comp;
};