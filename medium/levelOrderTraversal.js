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
var levelOrder = function(root) {
  let levels = [];
  if (!root) {
    return levels;
  } else {
    let nodes = [];
    nodes.push(root);
    while (nodes.length) {
      let nodeVals = [];
      let nextNodes = [];
      for (let node in nodes) {
        nodeVals.push(nodes[node].val)
        if (nodes[node].left) {
          nextNodes.push(nodes[node].left)
        }
        if (nodes[node].right) {
          nextNodes.push(nodes[node].right)
        }
      }
      levels.push(nodeVals)
      nodes = nextNodes;
    }
    return levels;
  }
};