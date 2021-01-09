/*
  Write a recursive function called capitalizeWords.
  Given an array of words, return a new array containing each word capitalized.
* */
function capitalizeWords(array) {
  let result = [];
  function helper(newArray) {
    if (newArray.length === 0) return;
    const firstItem = newArray.splice(0, 1);
    result.push(firstItem[0].toUpperCase());
    helper(newArray);
  }
  helper(array);
  return result;
}
