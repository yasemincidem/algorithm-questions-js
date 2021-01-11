/*
Reverse a singly linked list.
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

A linked list can be reversed either iteratively or recursively. Could you implement both?
Input Node: {
	"val": 1,
	"next": {
		"val": 2,
		"next": {
			"val": 3,
			"next": {
				"val": 4,
				"next": null
			}
		}
	}
}
* */
// Iterative Solution
function reverseList(head) {
  let prev = null;
  let curr = head;
  let nextTemp = null;
  while(curr!==null) {
    nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
// Recursive Solution
function reverseList(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
