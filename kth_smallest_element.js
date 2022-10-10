// PYTHON CODE

// class Solution:
//     def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
//         ls = []
//         for i in range(len(matrix)):
//             for j in range(len(matrix)):
//                 ls.append(matrix[i][j])
//         ls.sort()
//         return ls[k - 1]

//     print(kthSmallest([[1,5,9],[10,11,13],[12,13,15]]))