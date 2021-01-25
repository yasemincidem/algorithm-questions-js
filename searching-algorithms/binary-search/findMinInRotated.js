/*
Find Minimum in Rotated Sorted Array II

Solution
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:

Input: [1,3,5]
Output: 1
Example 2:

Input: [2,2,2,0,1]
Output: 0
* */
/*
Note: We are making use of the Template 3 by solving this problem.

* */
const findMin = (nums, left = 0, right = nums.length - 1) => {
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] < nums[right])
      return nums[left]
    if (nums[left] < nums[mid]) {
      left = mid;
    } else if (nums[left] > nums[mid]) {
      right = mid;
    } else {
      left += 1;
    }
  }
  if (nums[left] < nums[right]) {
    return nums[left];
  }
  return nums[right];
};
