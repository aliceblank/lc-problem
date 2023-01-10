/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  const helper = (character, index) => {
      let length = 1
      let tried = [character]
      if (s.length === 1) {
          longest = 1;
      };
      for (let i = index + 1; i < s.length; i++) {
          if (length > longest) {
              longest = length;
          }
          if (tried.indexOf(s[i]) === -1) {
              tried.push(s[i])
              length++;
              if (length > longest) {
                  longest = length;
              }
          } else {
              break;
          }
      }
  }
  for (let j = 0; j < s.length; j++) {
      helper(s[j], j)
  }
  return longest;
};