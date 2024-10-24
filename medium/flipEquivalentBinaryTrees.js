/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  if (!root1 || !root2) {
      if (!root1 && !root2) {
          return true;
      }
      return false
  } else {
      let flag = true;
      if (root1.val !== root2.val) {
          return false
      }
      let dfs = (node1, node2) => {
          if (((node1.left
          && node2.left
          && node1.left.val === node2.left.val) ||
          (!node1.left
          && !node2.left)) && ((
              node1.right
              && node2.right
              && node1.right.val === node2.right.val
          ) || (!node1.right && !node2.right))) {
              if (node1.left) {
                  dfs(node1.left, node2.left)
              }
              if (node1.right) {
                  dfs(node1.right, node2.right);
              }
          } else
          if (((node1.left
          && node2.right
          && node1.left.val === node2.right.val) ||
          (!node1.left
          && !node2.right)) && ((
              node1.right
              && node2.left
              && node1.right.val === node2.left.val
          ) || (!node1.right && !node2.left))) {
              if (node1.left) {
                  dfs(node1.left, node2.right)
              }
              if (node1.right) {
                  dfs(node1.right, node2.left)
              }
          } else {
              console.log(node1, node2)
              flag = false;
              return;
          }
          //check if the two children are equivalent.
          // if they aren't, check if they're flipped.
          // if they aren't equivalent OR flipped, flip flag to false;
      }
      dfs(root1, root2)
      return flag;
  }
};