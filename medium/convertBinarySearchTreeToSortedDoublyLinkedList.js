/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
class ListNode {
  constructor(val, prev = null, next = null) {
      this.val = val;
      this.left = prev;
      this.right = next;
  }
}

var treeToDoublyList = function(root) {
  if (!root) {
      return root;
  } else {
      let head = new ListNode('dummy');
      let nodes = []
      let dfs = (node) => {
          if (node.left) {
              dfs(node.left)
          }
          nodes.push(node.val);
          if (node.right) {
              dfs(node.right)
          }
      }
      dfs(root)
      let pointer = head;
      for (let i = 0; i < nodes.length; i++) {
          pointer.right = new ListNode(nodes[i], pointer, null);
          pointer = pointer.right;
      }
      head.right.left = pointer;
      pointer.right = head.right
      return head.right;
  }
};