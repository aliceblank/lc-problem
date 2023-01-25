//Given the root of a binary tree, determine if it is a valid binary search tree (BST).

//A valid BST is defined as follows:

//The left
//subtree
//of a node contains only nodes with keys less than the node's key.
//The right subtree of a node contains only nodes with keys greater than the node's key.
//Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let bool = true;
  const validator = (root, min, max) => {
      if (root) {
              if (root.left) {
                  if (root.left.val <= min) {
                      bool = false
                  } else if (root.val > root.left.val) {
                      validator(root.left, min, root.val)
                  } else {
                      bool = false;
                  }
              }
              if (root.right) {
                  if (root.right.val >= max) {
                      bool = false;
                  } else if (root.val < root.right.val) {
                      validator(root.right, root.val, max)
                  } else {
                      bool = false;
                  }
              }
      }
  }
  validator(root);
  return bool
};