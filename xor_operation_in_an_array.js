// CODE IN PYTHON 


// class Solution:
//     def xorOperation(self, n: int, start: int) -> int:
//         ls = [start]
//         while len(ls) < n:
//             start = start + 2
//             ls.append(start)
//         result = 0
//         print(ls)
//         for i in ls:
//             result = result ^ i
//             print(result, i)
//         return result