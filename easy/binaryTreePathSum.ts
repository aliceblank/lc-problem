/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const sumChecker = (node, currentSum) => {
    if (!node) {
      return false;
    } else {
      if ((node.val + currentSum === targetSum && !node.left && !node.right)) {
        return true;
      }
      currentSum += node.val;
      if (sumChecker(node.left, currentSum) || sumChecker(node.right, currentSum)) {
        return true;
      }
      return false;
    }
    }
    return sumChecker(root, 0);
};