/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === words.length - 1) {
          if (word[word.length - 1] !== words[0][0]) {
              return false;
          }
      } else {
          if (word[word.length - 1] !== words[i + 1][0]) {
              return false;
          }
      }
  }
  return true;
};