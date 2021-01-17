/*
Binary search pseudocode:
- This function accepts sorted array and a value
- Create a left pointer at the start of the array and a
  right pointer at the end of the array
- While the left pointer comes before right pointer
  - Create a pointer in the middle
  - if you find value you want, return the index
  - if the value is too small, move the left pointer up
  - if the value is too large, move the right pointer down
- If you never find the value, return -1;
* */

/*
Write a function called binarySearch  which accepts
a array and a value and returns the index at which the value exists. Otherwise, return -1.
Example:
binarySearch([1, 2, 3, 4, 5], 2) => 1
binarySearch([1, 2, 3, 4, 5], 5) => 4
* */
const getMiddle = (left, right) => {
  return Math.floor((left + right) / 2);
};
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle = getMiddle(left, right);
  while (nums[middle] !== target && left <= right) {
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = getMiddle(left, right);
  }
  if (nums[middle] === target) {
    return middle;
  }
  return -1;
};
const search2 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
};
