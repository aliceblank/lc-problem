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
var isSymmetric = function(root) {
  if (!root) {
      return false;
  } else {
      let nodes = [];
      nodes.push(root);
      while (nodes.length) {
          let nextLevel = [];
          for (let i = 0; i < nodes.length; i++) {
              if (nodes[i]) {
                  if (!nodes[nodes.length - 1 - i]) {
                      return false;
                  }
                  if (nodes[i].val !== nodes[nodes.length - 1 - i].val) {
                      return false;
                  }
                  else {
                      nextLevel.push(nodes[i].left)
                      nextLevel.push(nodes[i].right)
                  }
              } else {
                  if (nodes[nodes.length - 1 - i]) {
                      return false;
                  }
              }
          }
          nodes = nextLevel;
      }
      return true;
  }
};