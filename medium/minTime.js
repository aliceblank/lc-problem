//Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

//The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  let children = new Array(n)
  let time = 0;
  for (let i = 0; i < n; i++) {
      children[i] = []
  }
  for (var edge of edges) {
      children[edge[0]].push(edge[1])
      children[edge[1]].push(edge[0])
  }
  const applePicker = (branch, parent) => {
      let apples = false;
      for (let child of children[branch]) {
          if (child !== parent) {
              time++
              let q = applePicker(child, branch)
              if (q) {
                  time++
              } else {
                  time--
              }
              apples = apples || q
          }
      }
      if (hasApple[branch]) {
              return true;
      }
      return apples;
  }
  applePicker(0);
  return time
};