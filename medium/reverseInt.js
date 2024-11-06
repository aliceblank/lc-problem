/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reversed;
  if (x < 0) {
      reversed = Number((x * -1).toString().split('').reverse().join('')) * -1;
  } else {
      reversed = Number(x.toString().split('').reverse().join(''))
  }
  if (reversed > (2**31 -1) || reversed < (-(2 ** 31))) {
      return 0
  }
  return reversed
};