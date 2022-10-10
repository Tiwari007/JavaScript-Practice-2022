var checkPowersOfThree = function(n) {
    for(let i = parseInt(n/2) ; i >= 0; i--){
        if (n >= (3 ** i)){
            n = n - (3 ** i)
        }
    }
    
    if (n == 0){
        return true
    }
    else{
        return false
    }
};

console.log(checkPowersOfThree(27))