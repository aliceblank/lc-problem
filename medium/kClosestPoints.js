/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let closestPoints = new MaxPriorityQueue({priority: (val) => val[1]})
  for (let i = 0; i < points.length; i++) {
      let distance = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
      closestPoints.enqueue([points[i], distance]);
      if (closestPoints.size() > k) {
          closestPoints.dequeue();
      }
  }
  let output = []
  while (closestPoints.size() > 0) {
      output.push(closestPoints.dequeue().element[0]);
  }
  return output;
};