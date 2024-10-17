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
var findTilt = function(root) {
  if (!root) {
    return root;
  } else {
    let dfs = (node, leftSum, rightSum) => {
      if (!node.left && !node.right) {
        return 0;
      } else {
        if (node.left) {
          leftSum += dfs(node.left);
        }
        if (node.right) {
          rightSum += dfs(node.right);
        }
        return Math.abs(leftSum - rightSum)
      }
    }
  }
  return dfs(root, 0, 0);
}