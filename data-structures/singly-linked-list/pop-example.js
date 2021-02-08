/**
 * This function should remove a node at the end of the SinglyLinkedList.It should return the node removed.
 **/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next  = null;
    this.length--;
    return current;
  }
}

const list = new SinglyLinkedList();
list.pop();
