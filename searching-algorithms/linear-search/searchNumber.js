/*
Search a number
Given an array Arr of N elements and a integer K. Your task is to return the position of first occurence of K in the given array.
Note: Position of first element is considered as 1.
* */
function searhNumber(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      return i+1;
    }
  }
  return -1;
}
/*
Time Complexity: O(n)
* */
