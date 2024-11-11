/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) {
      return []
  } else {
      let store = {};
      let nodes = [[root, 100]]
      while (nodes.length) {
          let next = [];
          for (let idx in nodes) {
              let [node, column] = nodes[idx];
              if (!store[column]) {
                  store[column] = [node.val];
              } else {
                  store[column].push(node.val)
              }
              if (node.left) {
                  next.push([node.left, column - 1])
              }
              if (node.right) {
                  next.push([node.right, column + 1])
              }
          }
          nodes = next;
      }
      let output = []
      for (let key in store) {
          output.push(store[key]);
      }
      return output
  }
};