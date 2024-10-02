/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let ranks = [];
  let rankObj = {};
  let ranker = 1;
  let temp = arr.toSorted((a, b) => a - b)
  for (let i = 0; i < temp.length; i++) {
    if (!rankObj[temp[i]]) {
      rankObj[temp[i]] = ranker;
      ranker++;
    }
  }
for (let number in arr) {

  ranks.push(rankObj[arr[number]]);
}
  return ranks;
};