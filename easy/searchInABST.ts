function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  } else {
    const searcher = (node) => {
      if (node.val > val) {
        if (node.left) {
          return searcher(node.left);
        }
      }
      if (node.val < val) {
        if (node.right) {
          return searcher(node.right);
        }
      }
      if (node.val === val) {
        return node;
      }
      return null;
    }
    return searcher(root);
  }
};