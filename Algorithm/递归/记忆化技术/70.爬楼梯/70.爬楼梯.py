# 70 爬楼梯

# 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
# 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

# 输入：n = 2
# 输出：2
# 解释：有两种方法可以爬到楼顶
# 1. 1 阶 + 1 阶
# 2. 2 阶


class Solution:

    def climbStairs(self, n: int) -> int:
        dp = [None] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 2] + dp[i - 1]
        return dp[n]


# test
solution = Solution()
res = solution.climbStairs(10)
print(res)
