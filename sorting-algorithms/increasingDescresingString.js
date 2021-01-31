/**
 *  Increasing Decreasing String
 Given a string s. You should re-order the string using the following algorithm:

 Pick the smallest character from s and append it to the result.
 Pick the smallest character from s which is greater than the last appended character to the result and append it.
 Repeat step 2 until you cannot pick more characters.
 Pick the largest character from s and append it to the result.
 Pick the largest character from s which is smaller than the last appended character to the result and append it.
 Repeat step 5 until you cannot pick more characters.
 Repeat the steps from 1 to 6 until you pick all characters from s.
 In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

 Return the result string after sorting s with this algorithm.

 Example 1:

 Input: s = "aaaabbbbcccc"
 Output: "abccbaabccba"
 Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
 After steps 4, 5 and 6 of the first iteration, result = "abccba"
 First iteration is done. Now s = "aabbcc" and we go back to step 1
 After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
 After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
 **/
const sortString = function (s) {
  let result = "";
  const count = s.length;
  // Create array for each characters in alphabet
  const array = new Array(26).fill(0);
  // fill array with count the frequency of each character.
  for (const char of s) {
    const index = char.charCodeAt(0) - 97;
    array[index]++;
  }
  while (result.length < count) {
    // from a to z to append smallest char to the result;
    for (let i = 0; i < 26; i++) {
      if (array[i] > 0) {
        result += String.fromCharCode(i + 97);
        array[i]--;
      }
    }
    // from z to a to append smallest char to the result;
    for (let j = 25; j >= 0; j--) {
      if (array[j] > 0) {
        result += String.fromCharCode(j + 97);
        array[j]++;
      }
    }
  }
  return result;
};
