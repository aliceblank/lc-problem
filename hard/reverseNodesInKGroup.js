/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) {
      return head;
  } else {
      let nodes = [];
      let pointer = head;
      let counter = 1;
      while (pointer) {
          if (counter === 1) {
              nodes.push([]);
          }
          nodes[nodes.length - 1].push(pointer.val)
          if (counter === k) {
              counter = 1;
          } else {
              counter++;
          }
          pointer = pointer.next;
      }
      counter = 1
      pointer = head;
      if (nodes[nodes.length - 1].length !== k) {
          nodes.pop()
      }
      while (pointer) {
          if (nodes.length) {
              let curr = pointer
              pointer.val = nodes[0].pop();
              if (!nodes[0].length) {
                  nodes.shift()
              }
          }
          pointer = pointer.next;
      }
      return head;
  }
};