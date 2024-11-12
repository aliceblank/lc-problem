/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.window = []
  this.sum = 0;
  return this
};

/**
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.window.push(val);
  this.sum += val;
  if (this.window.length > this.size) {
      this.sum -= this.window.shift();
  }
  return this.sum / this.window.length;
};

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/