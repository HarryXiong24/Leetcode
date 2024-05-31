// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

class MonotonicQueue {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  pop(value: number) {
    if (this.queue.length && this.queue[0] === value) {
      this.queue.shift();
    }
  }

  peek(): number {
    return this.queue[0];
  }

  push(value: number) {
    while (this.queue.length && this.queue[this.queue.length - 1] < value) {
      this.queue.pop();
    }
    this.queue.push(value);
  }

  getMaxValue(): number {
    return this.peek();
  }
}

// Monotonic Queue
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const queue = new MonotonicQueue();

  // init
  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  result.push(queue.getMaxValue());

  for (let i = k; i < nums.length; i++) {
    queue.pop(nums[i - k]);
    queue.push(nums[i]);
    result.push(queue.getMaxValue());
  }

  return result;
}

// Time Limit Exceeded
function maxSlidingWindow1(nums: number[], k: number): number[] {
  const result: number[] = new Array(nums.length - k + 1).fill(0);

  for (let i = 0; i < result.length; i++) {
    const temp = nums.slice(i, i + k);
    result[i] = Math.max(...temp);
  }

  return result;
}

// Time Limit Exceeded
function maxSlidingWindow2(nums: number[], k: number): number[] {
  const result: number[] = [];
  const queue: number[] = [];

  // init
  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  result.push(Math.max(...queue));

  // loop
  for (let i = k; i < nums.length; i++) {
    queue.shift()!;
    queue.push(nums[i]);
    result.push(Math.max(...queue));
  }

  return result;
}

// test
const res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
const res1 = maxSlidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3);
const res2 = maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(res);
console.log(res1);
console.log(res2);
