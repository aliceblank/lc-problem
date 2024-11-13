/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
  const getDepth = (node, counter = 0) => {
      if (node.parent) {
          return getDepth(node.parent, counter + 1);
      } else {
          return counter;
      }
  }
  let depthFirst = getDepth(p)
  let depthSecond = getDepth(q)

  while (depthFirst !== depthSecond) {
      if (depthFirst > depthSecond) {
          depthFirst --
          p = p.parent;
      } else {
          depthSecond --
          q = q.parent;
      }
  }
  while (p.val !== q.val) {
      p = p.parent;
      q = q.parent;
  }
  return p
};