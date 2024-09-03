/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
*/
function getMinimumDifference(root: TreeNode | null): number {
  let minimum: number | undefined = undefined;
  const rootVals: number[] = []
  const traverser = (root) => {
    if (root) {
      rootVals.push(root.val);
      traverser(root.left);
      traverser(root.right);
    }
  }
  traverser(root)
  for (let i = 0; i < rootVals.length; i++) {
    for (let q = i + 1; q <rootVals.length; q++) {
      if (!minimum || Math.abs(rootVals[i] - rootVals[q]) < minimum) {
        minimum = Math.abs(rootVals[i] - rootVals[q])
      }
    }
  }
  if (!minimum) {
    return 0;
  }
  return minimum
};