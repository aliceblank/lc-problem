//You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let order = [];
  // if (root) {
  //     order.push(root.val)
  // }
  const recoverer = (root) => {
      if (root) {
          if (root.left) {
              recoverer(root.left);
          }
          order.push(root.val)
          if (root.right) {
              recoverer(root.right);
          }
      }
  }
  recoverer(root);
  let first;
  let second;
  console.log(order);
  for (let i = 1; i < order.length; i++) {
      if (order[i - 1] > order[i]) {
          if (!first) {
              first = order[i - 1]
          }
          second = order[i];
      }
  }
  const fixer = (root) => {
      if (root.val === first) {
          root.val = second;
      } else if (root.val === second) {
          root.val = first;
      }
      if (root.left) {
          fixer(root.left)
      }
      if (root.right) {
          fixer(root.right)
      }
  }
  fixer(root);
  return root;
};