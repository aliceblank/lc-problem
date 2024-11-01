/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let library = {};
  let sum = (num) => {
      let arr = num.toString().split('')
      let total = 0
      for (let i in arr) {
          total += Number(arr[i]) ** 2
      }
      if (total === 1) {
          return true
      }
      if (library[total]) {
          return false;
      } else {
          library[total] = true;
          return sum(total);
      }
  }
  return sum(n)
};