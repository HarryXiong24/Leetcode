from typing import List


# Find the Exact Value
class Solution:

    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                return mid

        return -1


# test
solution = Solution()
res = solution.search([-1, 0, 3, 5, 9, 12], 9)
print(res)
