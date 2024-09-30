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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root) {
    return null
  }
  let ancestorSearch = (node, ancestors, target) => {
    if (!node) {
      return false;
    } else {
      if (node.val === target) {
        return ancestors
      } else {
        ancestors.push(node)
        let left = ancestorSearch(node.left, ancestors, target);
        let right = ancestorSearch(node.right, ancestors, target);
        if (left) {
          return left;
        } else if (right) {
          return right;
        }
      }
    }
  }
  let pAncestors = ancestorSearch(root, [], p);
  let qAncestors = ancestorSearch(root, [], q);
  for (let i = qAncestors.length; i >= 0; i--) {
    if (pAncestors.indexOf(qAncestors[i]) !== -1) {
      return qAncestors[i]
    }
  }
  return null;
};