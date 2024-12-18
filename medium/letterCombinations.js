/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) {
      return []
  }
  let combos = [];
  let map = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
  }
  let runner = (index, curr) => {
      if (index === digits.length) {
          combos.push(curr)
          return;
      }
      for (let i = 0; i < map[digits[index]].length; i++) {
          runner(index + 1, curr + map[digits[index]][i])
      }
  }
  runner(0, '');
  return combos;
};