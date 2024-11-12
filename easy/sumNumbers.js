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
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) {
      return root;
  } else {
      let sum = 0;
      const dfs = (node, numString) => {
          if (!node.left && !node.right) {
              sum += Number(numString + node.val);
          } else {
              if (node.left) {
                  dfs(node.left, numString + node.val)
              }
              if (node.right) {
                  dfs(node.right, numString + node.val);
              }
          }
      }
      dfs(root, '');
      return sum;
  }
};