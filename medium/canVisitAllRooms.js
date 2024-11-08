/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let visited = {0: true};
  let searcher = (room) => {
      for (let i = 0; i < room.length; i++) {
          if (!visited[room[i]]) {
              visited[room[i]] = true;
              searcher(rooms[room[i]]);
          }
      }
  }
  searcher(rooms[0])
  return Object.keys(visited).length === rooms.length;
};