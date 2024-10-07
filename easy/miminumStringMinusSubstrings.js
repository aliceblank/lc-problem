/*
You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
*/
var minLength = function(s) {
  let split = s.split('')
  for (let i = 0; i < split.length - 1; i++) {
    if (split[i] === 'A') {
      if (split[i + 1] === 'B') {
        split.splice(i, 2);
        if (i <= 1) {
          i = -1;
        } else {
          i-=2;
        }
      }
    } else {
      if (split[i] === 'C') {
        if (split[i + 1] === 'D') {
          split.splice(i, 2)
        if (i <= 1) {
          i = -1;
        } else {
          i-=2;
        }
        }
      }
    }
  }
  return split.length;
};