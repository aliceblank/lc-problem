/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let candyGiven = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i - 1] < ratings[i] //current child is rated better
      && candyGiven[i] <= candyGiven[i - 1] //candy is same
      ) {
          candyGiven[i] = candyGiven[i - 1] + 1;
      }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i + 1] < ratings[i] // current child is rated better
      && candyGiven[i] <= candyGiven[i + 1] //candy is same or less
      ) {
          candyGiven[i] = candyGiven[i + 1] + 1;
      }
  }
  let solution = 0;
  for (let child in candyGiven) {
      solution += candyGiven[child]
  }
  return solution
};