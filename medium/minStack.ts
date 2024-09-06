class MinStack {
  constructor() {

  }
  vals: number[] = [];
  minVals: number[] = [];
  push(val: number): void {
    this.vals.push(val);
    if (!this.minVals.length) {
      this.minVals.push(val);
    } else if (val < this.minVals[this.minVals.length - 1]) {
      this.minVals.push(val);
    } else {
      this.minVals.push(this.minVals[this.minVals.length - 1]);
    }
  }

  pop(): void {
    this.vals.pop();
    this.minVals.pop();
  }

  top(): number {
    return this.vals[this.vals.length-1];
  }

  getMin(): number {
    return this.minVals[this.minVals.length-1];
  }
}