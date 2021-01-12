/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
Notice that the row index starts from 0.
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
In Pascal's triangle, each number is the sum of the two numbers directly above it.
Follow up:
Could you optimize your algorithm to use only O(k) extra space?
* */
const getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  let row = [1];
  let prev = getRow(rowIndex - 1);
  for (let i = 0; i < prev.length - 1; i++) {
    row.push(prev[i] + prev[i + 1]);
  }
  row.push(1);
  return row;
};
