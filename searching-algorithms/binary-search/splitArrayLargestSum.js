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

// TODO: This is in progress
const splitArray = function(nums, m) {
  let left = 1;
  console.log('sss');
  let right = nums.length -1;
  let subArray = [];
  let mid = Math.floor((right + left) / 2);
  while (mid > 0 && mid < nums.length -1) {
    let sumRightArray = 0;
    let sumLeftArray = 0;
    for (let i = 0; i< mid +1; i++){
      sumLeftArray += nums[i];
    }
    for (let j = mid +1; j < nums.length; j++){
      sumRightArray += nums[j];
    }
    console.log('sumRightArray', sumRightArray);
    console.log('sumLeftArray', sumLeftArray);
    if (sumRightArray > sumLeftArray) {
      subArray.push(sumRightArray);
    } else {
      subArray.push(sumLeftArray);
    }
    if ((mid +1) === nums.length -1) {
      mid--;
    } else if ((mid -1) === 0) {
      mid++;
    } else {
      mid++;
    }
  }
  console.log('subArray', subArray);
  return subArray.sort((a,b) => a - b)[0];
};
