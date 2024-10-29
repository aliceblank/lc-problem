/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = []
  let parensToRemove = {}
  let output = ''
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push([s[i], i])
      }
      if (s[i] === ')') {
          if (stack.length) {
              stack.pop()
          } else {
              parensToRemove[i] = true;
          }
      }
  }
  while (stack.length) {
      parensToRemove[stack.pop()[1]] = true
  }
      for (let q = 0; q < s.length; q++) {
          if (!parensToRemove[q]) {
              output+= s[q]
          }
      }
  return output
};