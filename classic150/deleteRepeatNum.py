# 26. 删除有序数组中的重复项
# https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150


from typing import List

# 双指针，
# left=0, right=1, 不重复将left+1处设置为right的值，right++，
# 结束标记：right==length-1，长度为left+1
def removeDuplicates(nums: List[int]) -> int:
    left = 0
    right = 1
    length = len(nums)
    while (right < length):
        if (nums[left] != nums[right]):
            nums[left+1] = nums[right]
            left+=1
        right+=1
    print(left+1, nums)
    return left+1

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
removeDuplicates([1,1,2,3])