/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let combos = [];
  let seen = {}
  const summer = (sum, used, arr) => {
      if (Object.keys(used).length === k) {
          if (sum === n) {
              if (!seen[Object.keys(used)]) {
                  combos.push(arr.slice())
              }
              seen[Object.keys(used)] = true;
              return;
          } else {
              return;
          }
      }
      for (let i = 1; i <= 9; i++) {
          if (!used[i]) {
              used[i] = true;
              arr.push(i)
              summer(sum + i, used, arr)
              arr.pop()
              delete used[i];
          }
      }
  }
  summer(0, {}, []);
  return combos;
};