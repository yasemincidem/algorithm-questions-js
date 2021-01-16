/*
Linear Search Exercise
Write a function called linearSearch which accepts an array and a value,
and returns the index at which the value exists. If the value does not exist in the array, return -1.
Note: Don't use indexOf to implement this function!
Example:
input:
linearSearch([10, 15, 20, 25, 30, 35], 20)
output: 2
* */
function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

/*
Time Complexity: O(n)
* */
