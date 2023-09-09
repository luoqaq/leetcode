# https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
# 27. 移除元素

from typing import List

# 从前往后遍历，如果==val，把最后一个元素放到最前面，数组长度减一
# 时间32ms 击败98.11%, 内存15.67mb，击败42.73%
def removeElement(nums: List[int], val: int) -> int:
    i = 0
    while(i < len(nums)):
        if (nums[i] == val):
            if (i < len(nums) - 1):
                nums[i] = nums.pop()
            else:
                nums.pop()
        else:
            i += 1
    print(len(nums), nums)
    return len(nums)

# 在上面的基础上，使用双指针，不做pop删除操作
# 没有提升
def removeElement2(nums: List[int], val: int) -> int:
    i = 0
    j = len(nums) - 1
    while(i <= j):
        if (nums[i] == val):
            if (i < j):
                nums[i] = nums[j]
            j -= 1
        else:
            i += 1
    nums = nums[:j+1]
    print(len(nums), nums)
    return len(nums)

removeElement2([0,1,2,2,3,0,4,2], 2)
removeElement2([3,2,2,3], 3)
removeElement2([1], 1)