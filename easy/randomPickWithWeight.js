/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.weights = new Map()
  this.size = 0;
  for (let i = 0; i < w.length; i++) {
      this.size += w[i];
      this.weights.set(this.size, i);
  }
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  let index = Math.floor(Math.random() * this.size);
  for (let key of this.weights.keys()) {
      if (index < key) {
          return this.weights.get(key)
      }
  }
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/