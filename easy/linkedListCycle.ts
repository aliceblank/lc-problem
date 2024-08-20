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

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  let fast = head;
  while (fast.next && fast.next.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) {
          return true;
      }
  }
  return false;
}