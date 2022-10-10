var topKFrequent = function(nums, k) {
    obj = {}   
    ls = []
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] += 1
        }
    }
    
    keysSorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
    
    for(let i=0;i<k;i++){
        ls.push(keysSorted[i])
    }
    
    return ls
};

console.log(topKFrequent([1,1,1,2,2,3], 2))