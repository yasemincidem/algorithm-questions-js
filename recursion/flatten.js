/*
 Write a recursive function called flatten which accepts
 an array of arrays and returns a new array with all values flattened.

 flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 flatten([[1],[2],[3]]) // [1,2,3]
 flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
* */
function flatten(array) {
  let result = [];
  function helper(newArray) {
    if (newArray.length === 0) return;
    if (!newArray[0].length) {
      result.push(newArray[0]);
    } else {
      helper(newArray[0]);
    }
    helper(newArray.splice(1));
  }
  helper(array);
  return result;
}
