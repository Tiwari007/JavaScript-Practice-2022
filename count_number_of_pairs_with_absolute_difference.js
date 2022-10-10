var countKDifference = function(nums, k) {
    count = 0
    for(let i =0; i< nums.length ; i++){
        for(let j =i; j< nums.length ; j++){
            if(Math.abs(nums[i] - nums[j]) == k){
                 count = count + 1
            }
                   
        }
    }          
        return count
};

console.log(countKDifference([1,2,2,1], 1))



//  CODE IN PYTHON

// class Solution:
//     def countKDifference(self, nums: List[int], k: int) -> int:
//         count = 0
//         for i in range(len(nums)):
//             for j in range(i, len(nums)):
//                 if abs(nums[i] - nums[j]) == k:
//                     count = count + 1
                    
//         return count
        