var finalValueAfterOperations = function(operations) {
    let result = 0
    for (let text of operations){
        if(text === "X++" || text === "++X"){
            result = result + 1
        }
        else if(text === "X--" || text === "--X"){
            result = result - 1
        }  
    }
    return result
};

console.log(finalValueAfterOperations(["++X", "--X", "X++", "X++", "X--"]))