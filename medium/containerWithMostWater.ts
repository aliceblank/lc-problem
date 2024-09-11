function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let water = 0;
    if (height[left] <= height[right]) {
      water = height[left] * (right - left);
      if (water > max) {
        max = water;
      }
      left++;
    } else if (height[left] > height[right]) {
      water = height[right] * (right - left);
      if (water > max) {
        max = water;
      }
      right--
    }
  }
  return max;
};