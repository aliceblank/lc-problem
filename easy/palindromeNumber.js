/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let stringX = x.toString();
  for (let i = 0; i < Math.ceil(stringX.length / 2); i++) {
      if (stringX[i] !== stringX[stringX.length - 1 - i]) {
          return false;
      }
  }
  return true;
};