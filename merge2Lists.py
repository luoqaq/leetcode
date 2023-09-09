# https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
# 合并两个有序数组

from typing import List

# 拷贝nums1，从前往后对比插入
def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    i = 0
    j = 0
    t = 0
    nums1C = nums1[:m]
    while (i < m and j < n):
        if (nums1C[i] <= nums2[j]):
            nums1[t] = nums1C[i]
            i += 1
        else:
            nums1[t] = nums2[j]
            j += 1
        t += 1
    print('第一次', nums1, i, j, t)
    while(i < m):
        nums1[t] = nums1C[i]
        i += 1
        t += 1
    while(j < n):
        print('j', j)
        print('t', t)
        nums1[t] = nums2[j]
        j += 1
        t += 1
    print(nums1)

# 从后往前比较，不需要创建一个新的元素
def merge2(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    t = m + n
    while (m > 0 and n > 0):
        print('m', m, 'n', n, 't', t)
        if (nums1[m - 1] < nums2[n - 1]):
            nums1[t-1] = nums2[n - 1]
            n -= 1
        else:
            nums1[t-1] = nums1[m - 1]
            m -= 1
        t -= 1
    while (n > 0):
        print('n', n, 't', t)
        nums1[t - 1] = nums2[n - 1]
        n -= 1
        t -= 1
    print(nums1)

a = [2,3,4,0,0]
b = [1,5]
merge2(a,3,b,2)
