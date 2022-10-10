const swap = (nums, i, j) => {
    temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp

    return nums;
}

const Cyclic_Sort = (nums) => {
    let size = nums.length;
    console.log(size);
    // let temp = 0


    let i = 0;
    while( i < size ){
        correct_index = nums[i] - 1
        if(nums[i] != nums[correct_index]){
            swap(nums, i, correct_index)
        }
        else{
            i += 1
        }        
    }

    // console.log(nums)
    let ls = []

    for(let j =0;j<nums.length;j++){
        if(nums[j] != j+1){
            ls.push(j+1)
        }
    }

    console.log("list of missing numbers" , ls)
    return ls




    // return nums

    
}

console.log(Cyclic_Sort([3,5,2,1,4,7,9,8,6,11,12,15]))