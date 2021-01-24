/*
Valid Perfect Square
Solution
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.
Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false
* */
/*
This problem should be solved with the Binary Search Template 1:
  left left = 0, right = nums.size() - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }
* */
const isPerfectSquare = function(num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  } return false;
};
