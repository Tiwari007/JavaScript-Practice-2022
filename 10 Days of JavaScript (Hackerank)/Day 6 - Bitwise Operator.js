function getMaxLessThanK(n, k){
    let max=0;
    for(let a = 1; a <= n; a++)
        for(let b = a + 1; b <= n; b++) {
            let x = a & b;
            if (max < x &&  x < k)
                    max = x;
        }
        return max;
}

console.log(getMaxLessThanK(5, 2))


