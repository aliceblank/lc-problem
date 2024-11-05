/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let l = 0;
  let r = 1;
  let changes = 0;
  while (r < s.length) {
      if (s[l] !== s[r]) {
          changes++;
      }
      l += 2;
      r += 2;
  }
  return changes;
};