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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (!root) {
      return root;
  } else {
      let nodes = [];
      let dfs = (node) => {
          if (node.left) {
              dfs(node.left);
          }
          nodes.push(node.val);
          if (node.right) {
              dfs(node.right);
          }
      }
      dfs(root);
      return nodes[k - 1]
  }
};