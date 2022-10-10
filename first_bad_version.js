// class Solution:
//     def firstBadVersion(self, n: int) -> int:
//         # temp = n
//         # while isBadVersion(temp):
//         #     temp = temp - 1
//         # return temp + 1
        
        
//         result = n
//         low = 1
//         high = n
        
//         while low <= high:
//             mid = (low + high) // 2
//             if isBadVersion(mid):
//                 result = mid
//                 high = mid - 1
//             else:
//                 low = mid  + 1
//         return result