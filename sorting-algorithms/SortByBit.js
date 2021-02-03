/**
 * Sort Integers by The Number of 1 Bits
 Easy
 Add to List

 Share
 Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

 Return the sorted array.

 Example 1:

 Input: arr = [0,1,2,3,4,5,6,7,8]
 Output: [0,1,2,4,8,3,5,6,7]
 Explantion: [0] is the only integer with 0 bits.
 [1,2,4,8] all have 1 bit.
 [3,5,6] have 2 bits.
 [7] has 3 bits.
 The sorted array by bits is [0,1,2,4,8,3,5,6,7]
 Example 2:

 Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
 Output: [1,2,4,8,16,32,64,128,256,512,1024]
 Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
 Example 3:

 Input: arr = [10000,10000]
 Output: [10000,10000]
 Example 4:

 Input: arr = [2,3,5,7,11,13,17,19]
 Output: [2,3,5,17,7,11,13,19]
 Example 5:

 Input: arr = [10,100,1000,10000]
 Output: [10,100,10000,1000]
 **/
/*
Since the input values can range from 0 to 10000, we can add to each element on the array the value of the bit count (the number of 1s) multiplied by 10001.
10001 is not a magic number, it is merely the max possible number the array may have + 1, which ensures that the bit count has the maximum priority,
and that we do not mistakenly erase a number when reverting the array back to its original values (after sorting).
This approach is an effective way of sorting by more than one criteria, a similar logic could be applied to more complex problems.
* */
const BitCount = (num) => {
  if (num !== 0) {
    return (num.toString(2).match(/1/g) || []).length;
  }
  return 0;
};
const sortByBits = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += BitCount(arr[i]) * 10001;
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] % 10001;
  }

  return arr;
};
