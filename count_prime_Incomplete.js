// CODE IN PYHTON

// class Solution:
//     def countPrimes(self, n: int) -> int:
//         def isPrime(num):
//             if num > 1:
//                 for i in range(2, num):
//                     if (num % i) == 0:
//                         return False
//                 return True

          
//         count = 0
//         for i in range(2, n + 1):
//             # print(i, isPrime(i))
//             if isPrime(i):
//                 count = count + 1
                
//         if count > 1:
//             return count
//         else:
//             return 0