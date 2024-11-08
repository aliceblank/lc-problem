/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let provinces = 0;
  let visited = {};
  const dfs = (index) => {
      for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[index][j] === 1 && !visited[j]) {
              visited[j] = true;
              dfs(j);
          }
      }
  }
  for (let i = 0; i < isConnected.length; i++) {
      if (!visited[i]) {
          dfs(i)
          provinces++;
      }
  }
  return provinces
};