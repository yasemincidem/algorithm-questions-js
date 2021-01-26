/**
 * Two Sum II - Input array is sorted

 Solution
 Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 Example 1:

 Input: numbers = [2,7,11,15], target = 9
 Output: [1,2]
 Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 Example 2:

 Input: numbers = [2,3,4], target = 6
 Output: [1,3]
 Example 3:

 Input: numbers = [-1,0], target = -1
 Output: [1,2]
 */
const twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length -1;
  while (left + 1 < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left + 1, right + 1];
};
