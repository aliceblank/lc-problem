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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let paths = 0;
  let currentPath = [];
  let depthSearch = (node, currentPath) => {
    if (!node) {
      return null;
    } else {
      let sum = 0
      currentPath.push(node.val);
      for (let i = currentPath.length - 1; i >= 0; i--) {
        sum += currentPath[i]
        if (sum === targetSum) {
          paths++;
        }
      }
      }
      depthSearch(node.left, currentPath);
      depthSearch(node.right, currentPath);
    currentPath.pop()
    return;
    }
  depthSearch(root, currentPath)
  return paths;
};