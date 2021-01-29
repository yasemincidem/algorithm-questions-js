/**
 Split Array Largest Sum

 Solution
 Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

 Write an algorithm to minimize the largest sum among these m subarrays.

 Example 1:

 Input: nums = [7,2,5,10,8], m = 2
 Output: 18
 Explanation:
 There are four ways to split nums into two subarrays.
 The best way is to split it into [7,2,5] and [10,8],
 where the largest sum among the two subarrays is only 18.
 Example 2:

 Input: nums = [1,2,3,4,5], m = 2
 Output: 9
 Example 3:

 Input: nums = [1,4,4], m = 3
 Output: 4
 **/

/**
 *
 * @param mid
 * @param array
 * @param n
 * @param K
 * @returns {boolean}

 * The result must lie between the max element and sum, referring as left and right pointer
 * Using binary search to search the mid value, we count how many element we need to split
 * If the count is greater than m, that mean our mid is too small so we need to increase our left pointer
 * Otherwise we decrease the right pointer
 * Time complexity O(nlog(s)) where n is number of elements and s is sum of array
 * Space complexity O(1)
 */

const check = (mid, array, n, K) => {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {

    // If individual element is greater
    // maximum possible sum
    if (array[i] > mid)
      return false;

    // Increase sum of current sub - array
    sum += array[i];

    // If the sum is greater than
    // mid increase count
    if (sum > mid) {
      count++;
      sum = array[i];
    }
  }
  count++;

  // Check condition
  if (count <= K)
    return true;
  return false;
};
const splitArray = function(nums, k, n = nums.length) {
  let start = 1;
  let end = 0;
  for (let i = 0; i < n; i++) {
    end += nums[i];
  }
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If mid is possible solution
    // Put answer = mid;
    if (check(mid, nums, n, k)) {
      answer = mid;
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return answer;
};
