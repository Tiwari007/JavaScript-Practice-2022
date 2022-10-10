/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    obj = {}   
    ls =[]
    
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] += 1
        }
    }
    
    // console.log(obj)
    for (const key in obj){
        if(obj[key] > (nums.length/3)){
            // console.log(key)
            ls.push(key)
        }
    }
    return ls
};


console.log(majorityElement([3,2,3]))