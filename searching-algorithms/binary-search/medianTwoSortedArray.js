/**
 Median of Two Sorted Arrays

 Solution
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

 Follow up: The overall run time complexity should be O(log (m+n)).



 Example 1:

 Input: nums1 = [1,3], nums2 = [2]
 Output: 2.00000
 Explanation: merged array = [1,2,3] and median is 2.
 Example 2:

 Input: nums1 = [1,2], nums2 = [3,4]
 Output: 2.50000
 Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 Example 3:

 Input: nums1 = [0,0], nums2 = [0,0]
 Output: 0.00000
 Example 4:

 Input: nums1 = [], nums2 = [1]
 Output: 1.00000
 Example 5:

 Input: nums1 = [2], nums2 = []
 Output: 2.00000
 */
const findMedianSortedArrays = function (input1, input2) {
  if (input1.length > input2.length) {
    return findMedianSortedArrays(input2, input1);
  }
  let x = input1.length;
  let y = input2.length;

  let low = 0;
  let high = x;
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    //if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
    //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
    let maxLeftX = (partitionX == 0) ? Number.MIN_SAFE_INTEGER : input1[partitionX - 1];
    let minRightX = (partitionX == x) ? Number.MAX_SAFE_INTEGER : input1[partitionX];

    let maxLeftY = (partitionY == 0) ? Number.MIN_SAFE_INTEGER : input2[partitionY - 1];
    let minRightY = (partitionY == y) ? Number.MAX_SAFE_INTEGER : input2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      //We have partitioned array at correct place
      // Now get max of left elements and min of right elements to get the median in case of even length combined array size
      // or get max of left for odd length combined array size.
      if ((x + y) % 2 == 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) { //we are too far on right side for partitionX. Go on left side.
      high = partitionX - 1;
    } else { //we are too far on left side for partitionX. Go on right side.
      low = partitionX + 1;
    }
  }
  ;
}
