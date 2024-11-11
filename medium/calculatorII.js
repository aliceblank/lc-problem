/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let currentNum = '';
  let operator = '+'
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '+' ||
          s[i] === '-' ||
          s[i] === '/' ||
          s[i] === '*' ||
          i === s.length - 1) {
          if (!isNaN(s[i])) {
              currentNum += s[i]
          }
          if (operator === '+') {
              stack.push(Number(currentNum))
          } else
          if (operator === '-') {
              stack.push(-Number(currentNum))
          } else
          if (operator === '*') {
              console.log(stack, currentNum)
              stack.push(stack.pop() * Number(currentNum))
          } else
          if (operator === '/') {
              stack.push(Math.trunc(stack.pop() / Number(currentNum)))
          }
          currentNum = '';
          operator = s[i];
      } else
      if (!isNaN(s[i])) {
          currentNum += s[i];
      }
  }
  let total = 0;
  for (let q = 0; q < stack.length; q++) {
      total += stack[q];
  }
  return total;
};