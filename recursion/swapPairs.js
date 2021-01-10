/*
Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.

Input: head = [1,2,3,4]
Output: [2,1,4,3]

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
const swapPairs = function (head) {
  let recur = function (node) {
    if (!node || node.next === null) {
      return node;
    }
    let firstNode = node;
    let secondNode = node.next;

    let temp = secondNode;
    firstNode.next = recur(secondNode.next);
    temp.next = firstNode;

    return temp;
  };
  return recur(head);
};
