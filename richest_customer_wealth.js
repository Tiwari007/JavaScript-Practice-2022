var maximumWealth = function(accounts) {
    const computeData = accounts.map(data => {
        return data.reduce((sum, value) => {return sum + value})
    })
    
    computeData.sort((a, b) => b - a)
    return computeData[0];
};


console.log(maximumWealth([[1, 2, 3], [1, 3, 4, 6], [1, 2, 3, 4, 12, 23]]))
