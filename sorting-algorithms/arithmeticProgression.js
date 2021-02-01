/**
 Can Make Arithmetic Progression From Sequence
 Easy

 Add to List

 Share
 Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

 Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

 Example 1:

 Input: arr = [3,5,1]
 Output: true
 Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
 Example 2:

 Input: arr = [1,2,4]
 Output: false
 Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 **/
/*Time Complexity is O(nlog(n))*/
const canMakeArithmeticProgression = function(arr) {
  const sortedArray = arr.sort((a,b) => b - a);
  let difference = sortedArray[0] - sortedArray[1];
  for (let i = 1; i < sortedArray.length - 1; i++) {
    if (difference !== (sortedArray[i] - sortedArray[i + 1])) {
      return false;
    }
  }
  return true;
};
