/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
      return head;
  } else {
      let nodes = [];
      let pointer = head;
      while (pointer) {
          nodes.push(pointer.val);
          pointer = pointer.next;
      }
      let listLength = nodes.length;
      let target = listLength - n;
      pointer = head;
      let counter = 1;
      if (nodes.length - n === 0) {
          head = head.next;
      } else
      while (pointer && pointer.next) {
          if (counter === target) {
              pointer.next = pointer.next.next;
          }
          counter++;
          pointer = pointer.next;
      }
      return head;
  }
};