var checkPowersOfThree = function(num, n) {
    for(let i = parseInt(num/2) ; i >= 0; i--){
        if (num >= (n ** i)){
            num = num - (n ** i)
        }
    }
    
    if (num > 0){
        return false
    }
    else{
        return true
    }
};

console.log(checkPowersOfThree(31, 2))