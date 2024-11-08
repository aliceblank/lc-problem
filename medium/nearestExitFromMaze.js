/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  maze[entrance[0]][entrance[1]] = '+';
  let roomsToTry = [entrance];
  let steps = 0;
  while (roomsToTry.length) {
      let nextRooms = []
      for (let room in roomsToTry) {
          let x = roomsToTry[room][1];
          let y = roomsToTry[room][0];
          if (maze[y][x] === '@') {
              if (y === 0 || x === 0 || y === maze.length - 1 || x === maze[0].length - 1) {
                  return steps;
              }
          }
          if (y - 1 >= 0 && maze[y - 1][x] === '.') {
              maze[y - 1][x] = '@'
              nextRooms.push([y - 1, x])
          }
          if (y + 1 <= maze.length - 1 && maze[y + 1][x] === '.') {
              maze[y + 1][x] = '@'
              nextRooms.push([y + 1, x])
          }
          if (x - 1 >= 0 && maze[y][x - 1] === '.') {
              maze[y][x - 1] = '@'
              nextRooms.push([y, x - 1])
          }
          if (x + 1 <= maze[0].length - 1 && maze[y][x + 1] === '.') {
              maze[y][x + 1] = '@'
              nextRooms.push([y, x + 1])
          }
      }
      steps++
      roomsToTry = nextRooms;
  }
  return -1
};