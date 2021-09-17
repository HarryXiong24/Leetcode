// 209 长度最小的子数组

/*
 * 给定一个含有 n 个正整数的数组和一个正整数 target
 * 找出该数组中满足其和 ≥ target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * 并返回其长度
 * 如果不存在符合条件的子数组，返回 0
 */

export function minSubArrayLen(target: number, nums: number[]): number {
  let result: number = nums.length + 1;
  let left: number = 0;
  let right: number = 0;
  let total: number = 0; // 窗口内元素的总和

  while (right < nums.length) {
    // 扩大窗口
    const c: number = nums[right++];
    total += c; // 更新窗口内数据
    // console.log(left, right);
    while (total >= target) {
      // 如果满足条件 大于等于 target 则开始缩小窗口
      result = Math.min(result, right - left); // 同时记录当前最短子序的长度
      const d: number = nums[left++];
      total -= d;
    }
  }

  return result > nums.length ? 0 : result;
}

// test
let res = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
let res2 = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
console.log(res);
console.log(res2);
