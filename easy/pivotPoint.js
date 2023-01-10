const pivotPoint = (nums) => {
  let pivot = -1;
  let leftSum = 0;
  nums.forEach((num, index) => {
    let rightSum = 0;
    let rightNums = nums.slice(index);
    rightNums.forEach((rightNum) => {
      rightSum += rightNum;
    })
    if (rightSum === leftSum) {
      return index;
    }
    leftSum += num;
  })
  return pivot;
}