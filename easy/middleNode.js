/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let pointer = head;
  let nodeNum = 0;
  let tracker = 0;
  while (pointer) {
      nodeNum++
      pointer = pointer.next;
  }
  pointer = head;
  if (nodeNum % 2) {
      while (tracker < (Math.floor(nodeNum/2))) {
          tracker++;
          pointer = pointer.next;
      }
      return pointer;
  } else {
      while (tracker < nodeNum/2) {
          tracker++;
          pointer = pointer.next;
      }
      return pointer;
  }
};