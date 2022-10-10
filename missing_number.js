var missingNumber = function(nums) {
    count = 0 
    let lengthofNum = nums.length
    let newArray = nums.sort((a, b) => a - b)
    for(let i=0; i<=lengthofNum; i++){
            if(i !== newArray[i]){
                return i
            } 
    }  
    }

console.log(missingNumber([0,5,4,1,2,3,7]))