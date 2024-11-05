/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let nodes = []
  if (!head) {
      return head;
  } else {
      let pointer = head;
      let passed = false;
      let counter = 1;
      while (pointer) {
          if (counter === left) {
              passed = true;
          }
          if (passed) {
              nodes.push(pointer.val);
          }
          if (counter === right) {
              passed = false;
          }
          counter++
          pointer = pointer.next;
      }
      counter = 1;
      pointer = head;
      while (pointer) {
          if (counter === left) {
              passed = true;
          }
          if (passed && nodes.length) {
              pointer.val = nodes.pop();
          }
          counter++
          pointer = pointer.next;
      }
      return head;
  }
};