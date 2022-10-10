const factorial = (n) => {
    let result = 1;
    if(n == 1){
        return 1;
    }

    result *= n * factorial(n - 1);
    return result



    //  BY USING LOOP

    // let result = 1;
    // for(let i = n; i > 0 ; i--){
    //     result *= i
    // }
    // return result

}

console.log(factorial(5))