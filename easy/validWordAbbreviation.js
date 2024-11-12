/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let wordPointer = 0;
  let abbrPointer = 0;
  let currentNum = '';
  while (wordPointer < word.length && abbrPointer < abbr.length) {
      if (!isNaN(abbr[abbrPointer])) {
          if (abbr[abbrPointer] === '0' && !currentNum.length) {
              return false;
          }
          currentNum+= abbr[abbrPointer];
          abbrPointer++;
      } else {
          if (currentNum.length) {
              wordPointer += Number(currentNum);
              currentNum = '';
          }
          if (word[wordPointer] !== abbr[abbrPointer]) {
              return false;
          } else {
              wordPointer++
              abbrPointer++
          }
      }
  }
  wordPointer += Number(currentNum);
  return wordPointer === word.length && abbrPointer === abbr.length
};