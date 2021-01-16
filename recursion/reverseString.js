/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Hint: The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
* */
const reverseString = function (s, first = 0, last = s.length - 1) {
  if (first === last || first > last) return;
  const temp = s[first];
  s[first] = s[last];
  s[last] = temp;
  reverseString(s, first + 1, last - 1);
  return s;
};


