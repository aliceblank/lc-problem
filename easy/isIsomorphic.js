/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let ss = s.split('');
  let tt = t.split('');
  let letters = {}
  let lettersChanged = {}
  const indexer = (array, target) => {
      let indices = [];
      array.forEach((char, index) => {
          if (char === target) {
              indices.push(index)
          }
      })
      return indices
  }
  for (let i = 0; i < s.length; i++) {
      let currLetter = ss[i];
      let altLetter = tt[i];
      if (!letters[currLetter]) {
          if (lettersChanged[altLetter]) {
              return false
          }
          letters[currLetter] = 1;
          lettersChanged[altLetter] = 1;
          let indices = indexer(ss, currLetter);
          for (let j = 0; j < indices.length; j++) {
              if (tt[indices[j]] !== altLetter){
                  return false;
              }
          }
      }
  }
  return true
};