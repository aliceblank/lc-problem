/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let expense = [];
  let l = cost.length;
  for (let i = 0; i < l; i++) {
      if (i === 0 || i === 1) {
          expense[i] = cost[i]
      } else {
          expense[i] = cost[i] + Math.min(expense[i - 1], expense[i - 2]);
      }
  }
  return Math.min(expense[l - 1], expense[l - 2])
};