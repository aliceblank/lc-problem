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
 * @return {number[]}
 */
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return [];
  } else {
    let output = [];
    let nodes = [root];
    while (nodes.length) {
      let maxValue = -Infinity;
      let nextLevel = [];
      for (let i = 0; i < nodes.length; i++) {
        maxValue = Math.max(nodes[i].val, maxValue);
        if (nodes[i].left) {
          nextLevel.push(nodes[i].left)
        }
        if (nodes[i].right) {
          nextLevel.push(nodes[i].right)
        }
      }
      output.push(maxValue)
      nodes = nextLevel;
      console.log(nodes)
    }
    return output;
  }
};