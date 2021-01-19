/*
Search in Rotated Sorted Array
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise, return -1.
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
* */
const findPivot = function(arr, low, high) {
  if (high < low)
    return -1;
  if (high == low)
    return low;

  let mid = Math.floor((low + high) / 2);

  if (mid < high && arr[mid] > arr[mid + 1])
    return mid;

  if (mid > low && arr[mid] < arr[mid - 1])
    return (mid - 1);

  if (arr[low] >= arr[mid])
    return findPivot(arr, low, mid - 1);

  return findPivot(arr, mid + 1, high);
};
const binarySearch = function(arr, low, high, key) {
  if (high < low)
    return -1;
  let mid = Math.floor((low + high) / 2);
  if (key == arr[mid])
    return mid;

  if (key > arr[mid])
    return binarySearch(arr, (mid + 1), high, key);

  // else
  return binarySearch(arr, low, (mid - 1), key);
};
const search = function(nums, key) {
  let pivot = findPivot(nums, 0, nums.length -1);
  // If we didn't find a pivot,
  // then array is not rotated at all
  if (pivot == -1)
    return binarySearch(nums, 0, nums.length - 1, key);

  // If we found a pivot, then first compare with pivot
  // and then search in two subarrays around pivot
  if (nums[pivot] == key)
    return pivot;

  if (nums[0] <= key)
    return binarySearch(nums, 0, pivot - 1, key);

  return binarySearch(nums, pivot + 1, nums.length - 1, key);
};
