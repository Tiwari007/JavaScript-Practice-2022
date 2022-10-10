var sortedSquares = function(nums) {
    var sorted = (nums.map(val=> {return val*val})).sort((a, b) => a - b)
    return sorted
};

console.log(sortedSquares([-4,-1,0,3,10]))