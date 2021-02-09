/**
 * This function should rotate all the nodes in the list by some number passed in.
 * If your list looks like 1 => 2 => 3 => 4 => 5 and you rotate by 2,
 * the list should be modified to 3 => 4 => 5 => 1 => 2
 * Time Complexity => O(n)
 * Space Complexity => O(1)
 **/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
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
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  rotate(index) {
    let passedNode = this.get(index);
    let current = this.head;
    while (current.next) {
      if (current.val === passedNode.val) {
        this.head = current.next;
        current.next = null;
        this.tail = current;
      } else {
        current = current.next;
      }
    }
  }
}

