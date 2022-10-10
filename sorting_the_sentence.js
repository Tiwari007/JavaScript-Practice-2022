// CODE IN PYTHON

// class Solution:
//     def sortSentence(self, s: str) -> str:
//         result = []
//         ls = s.split(" ")
//         for i in range(1, len(ls) + 1):
//             for word in ls:
//                 # print(i, word[-1])
//                 if i == int(word[-1]):
//                     # print(True)
//                     result.append(word[0:-1])
//                     # break
//         # print(result)
//         return " ".join(result)