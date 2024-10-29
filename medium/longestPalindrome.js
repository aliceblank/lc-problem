/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxLength = 0;
  let longestString = ''
  for (let i = 0; i < s.length; i++) {
      let l = i - 1;
      let r = i + 1;
      let curr = [s[i]]
      while (l >= 0 &&
      s[l] === s[r] &&
      r <= s.length - 1) {
          curr.unshift(s[l]);
          curr.push(s[r]);
          l--;
          r++;
      }
      if (curr.length > maxLength) {
          longestString = curr.join('');
          maxLength = curr.length;
      }
      l = i;
      r = i + 1;
      curr = []
      while (l >= 0 &&
      s[l] === s[r] &&
      r <= s.length - 1) {
          curr.unshift(s[l]);
          curr.push(s[r]);
          l--;
          r++;
      }
      if (curr.length > maxLength) {
          longestString = curr.join('');
          maxLength = curr.length;
      }
  }
  return longestString;
};