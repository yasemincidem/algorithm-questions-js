/*
* Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = []
Output: 0

Input: root = [0]
Output: 1
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root, num = 1) {
  if (root === null) {
    return 0;
  }
  if (root.right === null && root.left === null) {
    return num;
  }
  if (root.right && root.left) {
    return Math.max(maxDepth(root.right, num + 1), maxDepth(root.left, num + 1))
  } else if (root.right !== null) {
    return maxDepth(root.right, num + 1);
  } else {
    return maxDepth(root.left, num + 1);
  }
};
