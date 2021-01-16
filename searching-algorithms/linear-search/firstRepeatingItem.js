/*
First repeating element (80 Marks)
Given an array of integers, find the first repeating element in it.
We need to find the element that occurs more than once and whose index of first occurrence is smallest.

Input Format
You will be given a function with an integer array as arguments.

Constraints
1 < N < 10^5
1 < a[i] < 10^5

Output Format
You need to return the first repeating element from the function.
* */
function linearSearch(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i +1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return null;
}
/*
Time Complexity: O(n)
* */
