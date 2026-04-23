/**
 * Provide the solution to LeetCode 1929 here:
 * https://leetcode.com/problems/concatenation-of-array
 */
export function getConcatenation(nums: number[]): number[] {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  
  return ans;
}

console.log(getConcatenation([1, 2]));

/**
 * Provide the solution to LeetCode 2942 here:
 * https://leetcode.com/problems/find-words-containing-character/
 */
export function findWordsContaining(words: string[], x: string): number[] {
  return [];
}
