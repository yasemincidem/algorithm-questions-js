/*
Search for a Range

Solution
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
* */
const firstItem = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if ((mid == 0 || target > nums[mid - 1]) && nums[mid] == target)
      return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid -1;
    }
  } return -1;
};
const lastItem = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if ((mid == nums.length - 1 || target < nums[mid + 1]) && nums[mid] == target)
      return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  } return -1;
};
const searchRange = function(nums, target) {
  const first = firstItem(nums, target);
  const last = lastItem(nums, target);
  return [first, last];
};
