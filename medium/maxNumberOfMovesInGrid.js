/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
  max = 0;
  let gridMover = (row, col, moves) => {
      moves++
      max = Math.max(max, moves);
      if (grid[row - 1] &&
      grid[row - 1][col + 1] > grid[row][col]) {
          gridMover(row - 1, col + 1, moves)
      }
      if (grid[row][col + 1] > grid[row][col]) {
          gridMover(row, col + 1, moves)
      }
      if (grid[row + 1] &&
      grid[row + 1][col + 1] > grid[row][col]) {
          gridMover(row + 1, col + 1, moves)
      }
      grid[row][col] = 0;
  }
  for (let r = 0; r < grid.length; r++) {
      gridMover(r, 0, -1)
  }
  return max;
};