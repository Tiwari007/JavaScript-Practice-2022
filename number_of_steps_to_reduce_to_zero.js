var numberOfSteps = function(num) {
    count = 0 
    while(num !== 0){
        if(num % 2 === 0){
            num = num / 2
            count += 1
        }
        else{
            num = num -1
            count += 1
        }
    }
    return count
};

console.log(numberOfSteps(23))