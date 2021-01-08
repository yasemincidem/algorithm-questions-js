/*
 Write a recursive function called isPalindrome which returns true
 if the string passed to it is a palindrome (reads the same forward and backward).
 Otherwise it returns false.
* */
function isPolindrome(text) {
  let rawArray = text.split('');
  let reverseArray = [];
  function helper(array) {
    if (array.length === 0) return;
    const lastElement = array.splice(-1, 1)[0];
    reverseArray.push(lastElement);
    helper(array);
  }
  helper(rawArray);
  if (text === reverseArray.join('')) {
    return true;
  } return false;
}
