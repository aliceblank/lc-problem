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

/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
      return null;
  } else {
      let pointer = head;
      let evens = []
      while (pointer.next && pointer.next.next) {
              evens.push(pointer.next.val);
              pointer.next = pointer.next.next
              pointer = pointer.next;
      }
      if (pointer.next) {
        evens.push(pointer.next.val)
      }
      while (evens.length) {
        pointer.next = new ListNode(evens[0])
        evens.shift()
        pointer = pointer.next;
      }
      return head;
  }
};