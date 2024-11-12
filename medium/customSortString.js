/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  let store = {};
  for (let i = 0; i < s.length; i++) {
      if (store[s[i]]) {
          store[s[i]] ++
      } else {
          store[s[i]] = 1;
      }
  }
  let output = ''
  for (let q = 0; q < order.length; q++) {
      if (store[order[q]]) {
          while (store[order[q]] > 0) {
              output += order[q];
              store[order[q]]--
          }
          delete store[order[q]]
      }
  }
  for (let key in store) {
      while (store[key] > 0) {
          output += key
          store[key]--
      }
  }
  return output;
};