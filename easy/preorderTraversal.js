//Given the root of a binary tree, return the preorder traversal of its nodes' values.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var preorderTraversal = function(root) {
  let solution = [];
  if (root) {
    solution.push(root.val);
    if (root.left) {
      solution = solution.concat(preorderTraversal(root.left));
    }
    if (root.right) {
      solution = solution.concat(preorderTraversal(root.right));
    }
  }
  return solution;
};
