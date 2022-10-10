const LSB = (nums) => {
    let res = 0
    for(let num of nums){
        res ^= num
    }

    return res
}

console.log(LSB([1,2,3,4,3,2,1,7,7,11,12,12,4]))