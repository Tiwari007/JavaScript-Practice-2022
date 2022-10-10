
 var findMaxConsecutiveOnes = function(nums) {
    count = 0
    ls = []
    for (value of nums){
        if(value === 1){
            count = count + 1
        }
        else{
            ls.push(count)
            count = 0
        }
    }
    ls.push(count)
    ls.sort((a, b)=> b -a)
    return ls[0]
    
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,0]))