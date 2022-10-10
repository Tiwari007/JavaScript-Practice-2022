var singleNumber = function(nums) {
    obj = {}
    
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] += 1
        }
    }
    
    for (const key in obj){
        if(obj[key] === 1){
            return key
        }
    }
};

console.log(singleNumber([1,2,3,3,2,1,45]))