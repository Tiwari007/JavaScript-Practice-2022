var peakIndexInMountainArray = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        mid = parseInt((start + end) / 2)
        if (nums[mid] > nums[mid + 1]) {
            end = mid 
        }
        else{
            start = mid + 1
        }
    }
    return nums[start] 
};

console.log(peakIndexInMountainArray([1,2,3,8,5,4,2], 4))