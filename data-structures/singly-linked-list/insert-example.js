/**
 * This should insert a node at a specified index in SinglyLinkedList.
 * It should return true if index is valid, and false if index is not valid
 * (less than 0 and greater than the length of the list.)
 **/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 && index > this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    const currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) !!this.push(val);
    if (index === 0) !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }
}
