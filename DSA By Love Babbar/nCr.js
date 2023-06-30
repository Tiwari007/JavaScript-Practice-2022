// nCr = n!/(r! * (n-r)!)


let factorial = (n) => {

    // 1st Approach -  using loop
    // let fact = 1;
    // for( let i = n; i> 1; i--){
    //     fact = (fact * i)
    // }
    // return fact


    // 2nd Approach - using Recursion
    if (n == 0) return 1;
    else return n * factorial(n - 1)
}

console.log(factorial(5));


let nCr = (n, r) => {
    let result = factorial(n) / (factorial(r) * factorial(n - r))

    return result
}

console.log(nCr(8, 2));


