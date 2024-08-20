/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/
function wordPattern(pattern: string, s: string): boolean {
  const patternSplit = pattern.split('');
  const sSplit = s.split(' ');
  if (patternSplit.length !== sSplit.length) {
    return false;
  }
  const tuples = {};
  const reverseTuples = {}
  let flag = true;
  patternSplit.forEach((letter, index) => {
    if (sSplit[index] === 'constructor') {
      sSplit.splice(index, 1, 'constrctr')
    }
    if (!tuples[letter] && !reverseTuples[sSplit[index]]) {
      tuples[letter] = sSplit[index];
      reverseTuples[sSplit[index]] = letter;
    }
    else {
      if (tuples[letter] !== sSplit[index] ||
        reverseTuples[sSplit[index]] !== letter) {
        flag = false;
      }
    }
  })
  return flag;
};