const moving_zeroes_to_end = (nums) => {
    let size = nums.length;
    let c = 0;
    for(let i =0;i<size; i++){
        if (nums[i] !== 0) {
            [nums[i], nums[c]] = [nums[c], nums[i]];
            c++;
        }
    }
    return nums
}

console.log(moving_zeroes_to_end([1,3,0,7,0,4,5,0,7,3,4,0,4,0,3]));