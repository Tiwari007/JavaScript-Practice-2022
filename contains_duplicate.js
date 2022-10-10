var containsDuplicate = function(nums) {
    obj = {}   
    
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] += 1
        }
    }
    
    console.log(obj)
    for (const key in obj){
        if(obj[key] > 1){
            return true
        }
    }
    return false

    // let set =  new Set(nums)
    // if(set.length === nums.length){
    //     return true
    // }
    // else {
    //     return false
    // }
    
};


console.log(containsDuplicate([1,2,3,4,5,6,7,8,1]))