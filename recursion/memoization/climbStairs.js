/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
* */
const climbStairs = (n, count = 0, cache = []) => {
  if (count > n) {
    return 0;
  }
  if (count === n) {
    return 1;
  }
  if (cache[count] > 0) {
    return cache[count];
  }
  cache[count] = climbStairs(n, count + 1, cache) + climbStairs(n, count + 2, cache);
  return cache[count];
};
