/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function goodNodes(root: TreeNode | null): number {
  let count = 0;
  let depthSearch = (node, max) => {
    if (!node) {
      return null;
    } else if (node.val >= max) {
      count++;
      max = node.val;
    }
    depthSearch(node.left, max);
    depthSearch(node.right, max);
  }
  if (!root) {
    return count;
  } else {
    count++;
    let max = -Infinity;
    if (root.val > max) {
      max = root.val;
    }
    depthSearch(root.left, max);
    depthSearch(root.right, max)
  }
  return count;
};