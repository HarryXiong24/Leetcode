// 491. Non-decreasing Subsequences

// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

// Example 1:
// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

// Example 2:
// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]

export function findSubsequences(nums: number[]): number[][] {
  const results: number[][] = [];
  const path: number[] = [];

  const backtrack = (start_index: number) => {
    if (path.length >= 2) {
      results.push([...path]);
    }

    const used = new Set<number>();
    for (let i = start_index; i < nums.length; i++) {
      if (path.length > 0 && nums[i] < path[path.length - 1]) {
        continue;
      }
      if (used.has(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      used.add(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(0);

  return results;
}

// test
const res = findSubsequences([4, 6, 7, 7]);
console.log(res);
