
/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.
*/
class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) {
    return null;
  }
  var nodeMap = new Map();
  let pointer = head;
  while (pointer !== null && pointer.next) {
    let oldNode = pointer;
    let copyNode = new _Node(oldNode.val);
    nodeMap.set(oldNode, copyNode);
    pointer = pointer.next;
  }

  pointer = head;
  while (pointer !== null && pointer.next) {
    let copyNode = nodeMap.get(pointer);
    copyNode.next = nodeMap.get(pointer.next) || null
    copyNode.random = nodeMap.get(pointer.random) || null;
    pointer = pointer.next;
  }
  return nodeMap.get(head)
};