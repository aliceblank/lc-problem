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

function rightSideView(root: TreeNode | null): number[] {
  let rightSide: number[] = [];
  if (!root) {
    return rightSide;
  }
  let nodes = [root];
  while (nodes.length) {
    rightSide.push(nodes[nodes.length - 1].val)
    let nextLevel: TreeNode[] = [];
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].left) {
        nextLevel.push(nodes[i].left)
      }
      if (nodes[i].right) {
        nextLevel.push(nodes[i].right)
      }
    }
    nodes = nextLevel;
  }
  return rightSide;
};