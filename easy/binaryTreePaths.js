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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return root;
  } else {
    let paths = [];
    let dfs = (node, currentPath) => {
      currentPath.push(node.val)
      if (!node.left && !node.right) {
        let str = ''
        for (let i = 0; i < currentPath.length; i++) {
            if (i + 1 === currentPath.length) {
                str += currentPath[i];
            } else {
                str += currentPath[i] + '->'
            }
        }
        paths.push(str);
      }
      if (node.left) {
        dfs(node.left, currentPath);
      }
      if (node.right) {
        dfs(node.right, currentPath);
      }
      currentPath.pop()
    }
    dfs(root, []);
    return paths;
  }
};