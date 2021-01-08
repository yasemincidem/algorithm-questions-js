/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
* */
function capitalizeFirst(array) {
  let result = [];
  function helper(splicedArray) {
    if (splicedArray.length === 0) return;
    const lastItem = splicedArray.splice(0, 1);
    const splittedText = lastItem && lastItem.length ? lastItem[0].split('') : [];
    const arrayOfString = [splittedText[0].toUpperCase(), ...splittedText.splice(0, 1)];
    result.push(arrayOfString.join(''));
    helper(splicedArray);
  }
  helper(array);
  return result;
}
