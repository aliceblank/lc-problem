/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let wordPointer = 0;
  let abbrPointer = 0;
  let currentNum = ''
  while (wordPointer < word.length && abbrPointer < abbr.length) {
      if (!isNaN(abbr[abbrPointer])) {
          if (!currentNum.length && abbr[abbrPointer] === '0') {
              return false;
          }
          currentNum += abbr[abbrPointer]
          abbrPointer++;
      } else {
          if (currentNum.length) {
              wordPointer += Number(currentNum)
              currentNum = ''
          }
          if (abbr[abbrPointer] !== word[wordPointer]) {
              return false;
          } else {
              abbrPointer++
              wordPointer++
          }
      }
  }
  if (currentNum.length) {
      wordPointer += Number(currentNum)
  }
  return wordPointer === word.length && abbrPointer === abbr.length;
};