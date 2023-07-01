// BRUTE FORCE

{
function power(a, b) {
    // power(2,3) => 2 * 2 * 2 => 8
    let result = 1
    for (let i = 0; i < b; i++) {
        result *= a
    }
    return result
}


function isPowerOf2(n) {
    for (let i = 0; i < 31; i++) {
        if(power(2, i) == n) return true;
    }
    return false
}


let n = 256
console.log(isPowerOf2(n))
}

// ANOTHER APPROACH - check set bits if it is only one that means it is power of two

{
    let num = 31;
    let set_bit = 0
    let n = num
    while(n != 0){
        if(n & 1) set_bit += 1
        n = n >> 1
    }

    set_bit == 1 ? console.log(`the number ${num} is power of two`) : console.log(`the number ${num} is not a power of two`)
}
