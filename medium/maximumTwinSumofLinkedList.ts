/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
  if (!head) {
    return 0
  } else {
    let max = 0;
    let pointer = head;
    let vals = [];
    while (pointer.next) {
      vals.push(pointer.val);
      pointer = pointer.next;
    }
    vals.push(pointer.val);
    while (vals.length) {
      let currentSum = vals[0] + vals[vals.length - 1];
      if (currentSum > max) {
        max = currentSum;
      }
      vals.shift();
      vals.pop();
    }
    return max;
  }
};