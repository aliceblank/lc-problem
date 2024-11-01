/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let output = '';
  for (let i = 0; i < s.length; i++) {
      if (s[i - 1] === s[i] && s[i + 1] === s[i]) {
          continue;
      }
      output += s[i];
  }
  return output;
};