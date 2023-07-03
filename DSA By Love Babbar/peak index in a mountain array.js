// APPROACH 1

{
    var peakIndexInMountainArray = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let result = 0
    while(start <= end){
        mid = parseInt((start + end) / 2)
        if ((nums[mid] > nums[mid + 1]) && (nums[mid] > nums[mid - 1])) {
            return nums[mid]
        }
        else if((nums[mid] > nums[mid + 1]) && (nums[mid] < nums[mid - 1])){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
};

console.log(peakIndexInMountainArray([1,2,3,1]))
}



// APPROACH 2

{
    var peakIndexInMountainArray = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        mid = parseInt((start + end) / 2)
        if (nums[mid] < nums[mid + 1]) {
            start = mid + 1
        }
        else{
            end = mid
        }
    }
    return nums[start]
};

console.log(peakIndexInMountainArray([1,2,3,1]))
}