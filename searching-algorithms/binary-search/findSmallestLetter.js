/*
Find Smallest Letter Greater Than Target

Solution
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target,
find the smallest element in the list that is larger than the given target.
Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"
* */
/*
This problem should be solved with the Binary Search Template 2:
  if(nums.length == 0)
    return -1;

  let left = 0, right = nums.length;
  while(left < right){
    // Prevent (left + right) overflow
    let mid = left + (right - left) / 2;
    if(nums[mid] < target) { left = mid + 1; }
    else { right = mid; }
  }

  // Post-processing:
  // End Condition: left == right
  if(left != nums.length && nums[left] == target) return left;
  return -1;
* */
const nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length;
  if (target.charCodeAt() >= letters[letters.length -1].charCodeAt())
    return letters[0];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target.charCodeAt() < letters[mid].charCodeAt()) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return letters[left];
};
