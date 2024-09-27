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

function longestZigZag(root: TreeNode | null): number {
  if (!root) {
    return 0;
  } else {
    let max = 0;
    let zigzagSearch = (node, direction, counter) => {
      counter++;
      if (counter > max) {
        max = counter;
      }
      if (direction === 'l') {
        if (node.right) {
          zigzagSearch(node.right, 'r', counter);
        }
        if (node.left) {
          zigzagSearch(node.left, 'l', 0)
        }
      } else if (direction === 'r') {
        if (node.left) {
          zigzagSearch(node.left, 'l', counter);
        }
        if (node.right) {
          zigzagSearch(node.right, 'r', 0)
        }
      }
    }
    if (root.left) {
      zigzagSearch(root.left, 'l', 0)
    }
    if (root.right) {
      zigzagSearch(root.right, 'r', 0)
    }
    return max;
  }
};