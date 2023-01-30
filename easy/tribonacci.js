//The Tribonacci sequence Tn is defined as follows:

//T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

//Given n, return the value of Tn.


/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let tribObj = { 0: 0, 1: 1, 2: 1};
  for (let i = 3; i <= n; i++) {
      tribObj[i] = tribObj[i - 3] + tribObj[i - 2] + tribObj[i - 1];
  }
  return tribObj[n];
};