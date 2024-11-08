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
var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  } else {
      let dupes = {}
      let pointer = head;
      while (pointer) {
          if (pointer.next &&
          pointer.val === pointer.next.val) {
              dupes[pointer.val] = true;
          }
          pointer = pointer.next;
      }
      while (head && dupes[head.val]) {
          head = head.next;
      }
      pointer = head;
      while (pointer && pointer.next) {
          while (pointer.next && dupes[pointer.next.val]) {
              pointer.next = pointer.next.next;
          }
          pointer = pointer.next;
      }
      return head;
  }
};