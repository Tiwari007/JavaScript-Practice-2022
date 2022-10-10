
//  PYTHON CODE FOR SUFFLING ARRAY

// class Solution:
//     def shuffle(self, nums: List[int], n: int) -> List[int]:
//         lsI = []
//         lsF = []
//         result = []
//         for i in range(0, n):
//             lsI.append(nums[i])
//         for j in range(n, len(nums)):
//             lsF.append(nums[j])
//         # print(lsI)
//         # print(lsF)
        
//         for k in range(n):
//             # print(lsI[k], lsF[k])
//             result.append(lsI[k])
//             result.append(lsF[k])
//         # print(result)
//         return result