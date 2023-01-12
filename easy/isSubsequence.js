//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

//A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) {
      return true;
  }
  let ss = s.split('').reverse()
  let tt = t.split('').reverse()
  let last = tt.indexOf(ss[0]);
  tt.splice(last, 1);
  if (ss.length === 1 && last !== -1) {
      return true;
  }
  let helper = (index, i) => {
      if (tt.indexOf(ss[i]) < index || tt.indexOf(ss[i]) === -1) {
          return false;
      }
      let next = tt.indexOf(ss[i]);
      if (ss[i + 1]) {
          tt.splice(next, 1);
          return helper(next, i+1)
      } else {
          return true;
      }
  }
  if (helper(last, 1)) {
      return true;
  }
  return false;
};