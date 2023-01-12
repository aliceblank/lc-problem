//You are given the heads of two sorted linked lists list1 and list2.

//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

//Return the head of the merged linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let list3 = new ListNode();
  let copyNode = list3;
  if (list1 || list2) {
  if (!list1) {
      copyNode.val = list2.val
      list2 = list2.next;
  } else
  if (!list2) {
      copyNode.val = list1.val
      list1 = list1.next;
  } else
  if (list1.val <= list2.val) {
      copyNode.val = list1.val
      list1 = list1.next;
  } else
  if (list2.val < list1.val) {
      copyNode.val = list2.val
      list2 = list2.next;
  }
  } else {
      return null
  }
  while (list1 || list2) {
      if (!list1) {
          let newNode = new ListNode();
          newNode.val = list2.val;
          copyNode.next = newNode;
          copyNode= newNode
          list2 = list2.next;
      } else if (!list2) {
          let newNode = new ListNode();
          newNode.val = list1.val;
          copyNode.next = newNode;
          copyNode = newNode;
          list1= list1.next;
      } else if (list1.val <= list2.val) {
          let newNode = new ListNode();
          newNode.val = list1.val;
          copyNode.next = newNode;
          copyNode = newNode;
          list1= list1.next;
      } else if (list2.val < list1.val) {
          let newNode = new ListNode();
          newNode.val = list2.val;
          copyNode.next = newNode;
          copyNode = newNode;
          list2 = list2.next;
      }
  }
  return list3
};