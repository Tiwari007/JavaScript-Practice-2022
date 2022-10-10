var kWeakestRows = function(mat, k) {
    const computeData = mat.map(data => {
        const count = data.map(value => value === 1)
        console.log(count)
    })

    return computeData
    
};

console.log(kWeakestRows([[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]]))