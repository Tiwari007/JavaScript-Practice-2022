var findNumbers = function(nums) {
    toalCount = 0
    for(let value of nums){
        // console.log(value)
        if(value === 100000 || value === 10000 || value === 1000 || value === 100 || value === 10) { return 1}
        count  = 1
        temp = value
        while(temp > 10){
            temp = temp / 10
            count = count + 1
        }
        // console.log(count)
        if(count % 2 === 0){
            toalCount = toalCount + 1
        }
    }
    return toalCount
};

console.log(findNumbers([12,34,567,65,6789,654]))