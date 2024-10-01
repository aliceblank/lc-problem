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

function maxLevelSum(root: TreeNode | null): number {
  if (!root) {
return 0;
} else {
let nodes = [root];
let max = root.val;
let maxLevel = 1;
let level = 1;
while (nodes.length) {
  let sum = 0;
  let nextLevel: TreeNode[] = []
  for (let node of nodes) {
    sum += node.val;
    if (node.left) {
      nextLevel.push(node.left);
    }
    if (node.right) {
      nextLevel.push(node.right);
    }
  }
  if (sum > max) {
    max = sum;
    maxLevel = level;
  }
  level++;
  nodes = nextLevel;
}
return maxLevel;
}
};