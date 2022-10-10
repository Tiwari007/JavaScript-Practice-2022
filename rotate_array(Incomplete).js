var rotate = function(nums, k) {
    
    for(let j = 0; j<k ;j++){
        let len = nums.length
        let temp = nums[len -1]
        
        for(let i = len-1;i>= 0; i--)
        {
        if(i == 0){
            nums[i] = temp;
        }
            else
                {
        nums[i] = nums[i-1]
                }
    }
    }
    return nums
};


console.log(rotate([1,2,3,4,5,6,7,8,9,45,67,87,98], 4))


// PYTHON CODE FOR ROTATION

// class Solution:
//     def rotate(self, nums: List[int], k: int) -> None:
//         for i in range(k):
//             nums.insert(0,nums.pop())
        