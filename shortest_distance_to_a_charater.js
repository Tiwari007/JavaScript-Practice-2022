// CODE IN PYTHON

// class Solution:
//     def shortestToChar(self, s: str, c: str) -> List[int]:
//         ls = []
//         for i in range(len(s)):
//             # print(character)
//             if s[i] == c:
//                 ls.append(i)
        
//         ls1 = []
//         for j in range(len(s)):
//             min = inf
//             for i in ls:
//                 if abs(i - j) <= min:
//                     min = abs(i-j)
//             ls1.append(min)
                
//         return ls1