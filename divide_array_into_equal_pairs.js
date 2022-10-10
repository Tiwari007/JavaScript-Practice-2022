var divideArray = function(nums) {
    nums.sort((a,b) => a - b)
    let count = 0
    for(let i =0;i<nums.length;i+=2){
        if (nums[i] == nums[i+1]){
            count += 1
        }
        console.log(i)
    }
    console.log(nums)
    if(count === nums.length/2){
        return true
    }
    else{
        return false
    }
};

console.log(divideArray([2,3,2,3,4,4]))