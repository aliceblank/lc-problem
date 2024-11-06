/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let left = 0;
  let sign = 1;
  let output = ''
  let numbers = {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
  }
  while (s[left] === ' ') {
      left++;
  }
  if (s[left] === '-') {
      sign = -1;
      left++
      if (!numbers[s[left]]) {
          return 0
      }
  }
  if (s[left] === '+') {
      left++
  }
  while (numbers[s[left]]) {
      output += s[left];
      left++
  }
  output = Number(output) * sign;
  if (output > 2 ** 31 - 1) {
      output = 2 ** 31 - 1
  }
  if (output < -(2 ** 31)) {
      output = -(2 ** 31)
  }
  return output;
};