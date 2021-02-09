/**
 * This function should find a node at a specified index in SinglyLinkedList. It should return the found node.
 **/
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(val){
    this.val = val;
    this.next = null;
    this.length = 0;
  }
  // Solution 1:
  get(index){
    if (!this.head) return undefined;
    let current = this.head;
    let count = 0;
    while(current.next) {
      if (count === index) {
        return current.val;
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Solution 2:
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
}
