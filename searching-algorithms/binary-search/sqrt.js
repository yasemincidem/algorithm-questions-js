/*
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Input: x = 4
Output: 2

Input: x = 8
Output: 2
* */
const sqrt = (num) => {
  let left = 1;
  let right = num;
  let result = 0;
  if (num < 2) {
    return num;
  }
  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (mid * mid === num) {
      return mid;
    }
    else if (mid*mid < num) {
      left = mid + 1;
      result = mid;
    } else  {
      right = mid -1;
    }
  }
  return result;
};
