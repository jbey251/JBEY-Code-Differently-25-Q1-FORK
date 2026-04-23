/**
 * Provide the solution to LeetCode 1929 here:
 * https://leetcode.com/problems/concatenation-of-array
 */
export function getConcatenation(nums: number[]): number[] {
  const array = [];
  for (const ans of nums) {
    array.push(ans);
  }
  for (const ans of nums) {
    array.push(ans);
  }
  return array;
}

console.log(getConcatenation([1, 2]));

/**
 * Provide the solution to LeetCode 2942 here:
 * https://leetcode.com/problems/find-words-containing-character/
 */
export function findWordsContaining(words: string[], x: string): number[] {
  const array: number[] = [];
  let i = 0;

  for (const string of words) {
    if (string.indexOf(x) != -1) {
      array.push(i);
    }
    i++;
  }
  return array;
}

console.log(findWordsContaining(['leet', 'code'], 'e'));