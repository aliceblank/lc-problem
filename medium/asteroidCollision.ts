/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
*/
function asteroidCollision(asteroids: number[]): number[] {
  let solution: number[] = [];
  let left = 0;
  while (asteroids[left] < 0) {
    solution.push(asteroids[left])
    left++;
  }
  for (let i = left; i < asteroids.length; i++) {
    if (solution.length === 0) {
      solution.push(asteroids[i])
    } else {
    let direction = solution[solution.length - 1] < 0
    ? 'left'
    : 'right'
    if (direction === 'right') {
      if (asteroids[i] < 0) {
        if (Math.abs(asteroids[i]) > Math.abs(solution[solution.length - 1])) {
          solution.pop();
          i--
        } else
        if (Math.abs(asteroids[i]) === Math.abs(solution[solution.length- 1])) {
          solution.pop();
        }
      }
      else {
        solution.push(asteroids[i])
      }
    } else {
        solution.push(asteroids[i])
    }
    }
  }
  return solution;
};