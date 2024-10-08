/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) {
    return head;
  } else {
    let nodes = [];
    let pointer = head.next;
    while (pointer) {
      nodes.push(pointer.val);
      pointer = pointer.next;
    }
    pointer = head;
    let counter = 1;
    while (nodes.length) {
      if (counter % 2) {
        pointer.next = new ListNode(nodes.pop());
      } else {
        pointer.next = new ListNode(nodes.shift());
      }
      counter++
      pointer = pointer.next;
    }
    return head;
  }
};