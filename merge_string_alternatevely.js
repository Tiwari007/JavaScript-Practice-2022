// CODE IN PYTHON

// class Solution:
//     def mergeAlternately(self, word1: str, word2: str) -> str:
//         ls = []
//         size = 0
//         lastArray = []
//         if len(word1) < len(word2):
//             size = len(word1)
//             lastArray = word2[size:len(word2)]
//         elif len(word1) > len(word2):
//             size = len(word2)
//             lastArray = word1[size:len(word1)]
//         else:
//             size = len(word1)
//             lastArray = []
        
        
            
//         for i in range(size):
//             ls.append(word1[i])
//             ls.append(word2[i])
            
//         ls.extend(lastArray)
//         print(ls)
//         return "".join(ls)