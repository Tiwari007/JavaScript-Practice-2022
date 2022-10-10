// CODE IN PYTHON


// class Solution:
//     def restoreString(self, s: str, indices: List[int]) -> str:
//         ls = []
//         # # if s == "codeleet": return "leetcode"
//         # for i in indices:
//         #     for j in range(len(s)):
//         #         if i == j:
//         #             ls.append(s[j])
//         # return str("".join(ls))
//         obj = {}
//         j = 0
//         for i in range(len(s)):
//             obj[indices[j]] = s[i]
//             j = j+ 1
        
//         for i in range(len(s)):
//             for key in obj:
//                 if i == int(key):
//                     ls.append(obj[key])
            
//         return str("".join(ls))