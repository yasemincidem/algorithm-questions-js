/*
Find Minimum in Rotated Sorted Array

Solution
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums, return the minimum element of this array.
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
* */
const findMin = function(nums, left = 0, right = nums.length -1) {
  if (right < left)
    return -1;
  // If left is equal right, it means the array is already sorted
  if (left == right)
    return nums[0];
  const mid = Math.floor((left + right) /2);
  // To check the left neighbourhood
  if (mid > left && nums[mid - 1] > nums[mid]) {
    return nums[mid];
  }
  // To check the right neighbourhood
  if (mid < right && nums[mid + 1] < nums[mid]) {
    return nums[mid + 1];
  }
  // If the number's neighborhoods are already sorted,
  // check the first element of array in order to select the direction to go
  if (nums[0] <= nums[mid]) {
    return findMin(nums, mid + 1, right);
  } else
    return findMin(nums, left, mid -1);
};
