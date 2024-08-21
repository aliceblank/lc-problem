/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
*/

class RandomizedSet {
  constructor() {
  }
  vals = {}
  insert(val: number): boolean {
    if (this.vals[val]) {
      return false;
    } else {
      this.vals[val] = true;
      return this.vals[val]
    }
  }

  remove(val: number): boolean {
      if (this.vals[val]) {
        this.vals[val] = false;
        return true
      } else {
        return false;
      }
  }

  getRandom(): number {
      let randomVal = Object.keys(this.vals)[Math.floor(Math.random() * Object.keys(this.vals).length)]
      while (!this.vals[randomVal]) {
        randomVal = Object.keys(this.vals)[Math.floor(Math.random() * Object.keys(this.vals).length)]
      }
      return Number(randomVal);
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/