var uniqueOccurrences = function(arr) {
    obj = {}   
    
    for(let num of arr){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] += 1
        }
    }
    
    // console.log(obj)
    
    obj1 = {}
    
    for (const key in obj){
        if(!obj1[obj[key]]){
            obj1[obj[key]] = 1
        }
        else{
            obj1[obj[key]] += 1
        }
        // console.log(key)
    }
    
    console.log(obj1)
    
    for (const key in obj1){
        if(obj1[key] > 1){
            return false
        } 
    }
    return true
    
};

// [1,2,2,1,1,3]
// [-3,0,1,-3,1,1,1,-3,10,0]
// [1,2]