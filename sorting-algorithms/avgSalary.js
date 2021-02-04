/**
 *  Average Salary Excluding the Minimum and Maximum Salary
 Easy
 Add to List
 Share
 Given an array of unique integers salary where salary[i] is the salary of the employee i.

 Return the average salary of employees excluding the minimum and maximum salary.

 Example 1:

 Input: salary = [4000,3000,1000,2000]
 Output: 2500.00000
 Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
 Example 2:

 Input: salary = [1000,2000,3000]
 Output: 2000.00000
 Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 Average salary excluding minimum and maximum salary is (2000)/1= 2000
 Example 3:

 Input: salary = [6000,5000,4000,3000,2000,1000]
 Output: 3500.00000
 Example 4:

 Input: salary = [8000,9000,2000,3000,6000,1000]
 Output: 4750.00000
 **/
/*Time Complexity: O(n), Space complexity: O(1)*/
const average = function (salary) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    min = Math.min(min, salary[i]);
    max = Math.max(max, salary[i]);
  }
  const avg = (sum - (min + max)) / (salary.length - 2);
  if (salary.length > 2)
    return ans;
  else
    return 0;
  return avg;
};
