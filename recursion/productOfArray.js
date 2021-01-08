/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
* */
function productOfArray(array) {
  if (array.length === 0) return 1;
  const first = array.splice(0, 1);
  return first[0] * productOfArray(array);
}
