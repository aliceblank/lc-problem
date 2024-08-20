/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0;
    if (root) {
      maxDepth++;
    }
    const depthSearcher = (node, depth) => {
      if (node && (node.right || node.left)) {
        depth++
        if (depth > maxDepth) {
          maxDepth = depth
        }
      }
      if (node && node.left) {
        depthSearcher(node.left, depth)
      }
      if (node && node.right) {
        depthSearcher(node.right, depth)
      }
    }
    depthSearcher(root, maxDepth)
    return maxDepth;
};