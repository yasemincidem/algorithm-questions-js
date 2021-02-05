/**
 * Relative Sort Array
 Easy
 Add to List

 Share
 Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

 Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 Example 1:

 Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 Output: [2,2,2,1,4,3,3,9,6,7,19]


 Constraints:

 1 <= arr1.length, arr2.length <= 1000
 0 <= arr1[i], arr2[i] <= 1000
 All the elements of arr2 are distinct.
 Each arr2[i] is in arr1.
 **/
const relativeSortArray = function (arr1, arr2) {
  let newArray = [];
  let restArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1) {
      arr1[i] += (arr2.indexOf(arr1[i])) * 10001;
      newArray.push(arr1[i]);
    } else {
      restArray.push(arr1[i]);
    }
  }
  newArray.sort((a, b) => a - b);
  restArray.sort((a, b) => a - b);
  for (let j = 0; j < newArray.length; j++) {
    newArray[j] = newArray[j] % 10001;
  }
  return [...newArray, ...restArray];
};
