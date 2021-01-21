/*
Find Peak Element
Solution
A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index.
If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞.
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2,
or index number 5 where the peak element is 6.
* */
const findPeakElement = function (nums, left = 0, right = nums.length - 1) {
  let mid = Math.floor((left + right) / 2);
  // Compare middle element with its
  // neighbours (if neighbours exist)
  if ((mid === 0 || nums[mid - 1] <= nums[mid]) &&
    (mid === nums.length - 1 || nums[mid + 1] <= nums[mid])) {
    return mid;
  }
  // If middle element is not peak and its
  // left neighbour is greater than it,
  // then left half must have a peak element
  else if (nums[mid - 1] > nums[mid]) {
    return findPeakElement(nums, left, mid - 1);
  }
  // If middle element is not peak and its
  // right neighbour is greater than it,
  // then right half must have a peak element
  else
    return findPeakElement(nums, mid + 1, right);
};
