//  CODE IN PYTHON

// class Solution:
//     def searchRange(self, nums: List[int], target: int) -> List[int]:
//         nums.sort()
//         ls = []
//         for i in range(len(nums)):
//             if nums[i] == target:
//                 ls.append(i)
                
//         # print("ls - ", ls)      
//         if (len(ls) == 0):
//             return [-1,-1]
//         elif (len(ls) == 1):
//             return [ls[0],ls[0]]
//         elif (len(ls) == 2):
//             return ls
//         else:
//             return [ls[0],ls[-1]]
        