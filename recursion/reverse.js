/* Write a recursive function called reverse
which accepts a string and returns a new string in reverse.
* */
function reverse(text) {
  const initArray = text.split('');
  let result = [];
  function helper(array) {
    if(array.length === 0) return;
    const lastItem = array.splice(-1,1)[0];
    result.push(lastItem);
    helper(array)
  }
  helper(initArray);
  return result.join('');
}
