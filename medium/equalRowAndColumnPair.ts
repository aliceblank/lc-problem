function equalPairs(grid: number[][]): number {
  let rows = new Map();
  let columns = new Map();
  let totalPairs = 0;
  for (let i = 0; i < grid.length; i++) {
    rows.set(grid[i], i);
    let currentCol: number[] = [];
    for (let q = 0; q < grid.length; q++) {
        currentCol.push(grid[q][i]);
    }
    columns.set(currentCol, i)
  }
  for (let row of rows) {
    for (let column of columns) {
      if (JSON.stringify(row[0]) === JSON.stringify(column[0])) {
        totalPairs++;
      }
    }
  }
  return totalPairs;
};