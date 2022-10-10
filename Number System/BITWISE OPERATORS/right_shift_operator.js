//  right shift on binary number  


// const left_shift_bit = (num, n) => {

//     let stringOfZeros = "";
//     for(let i =0;i<n; i++){
//         stringOfZeros += "0"
//     }

//     let result =  ("" + stringOfZeros + num).split("");

//     for(let j =0;j<n;j++){
//         result.pop()
//     }

//     return result.join("")
// }

// const binaryToDecimal = (num) => {
//     let decimal = 0;
//     let temp = num;
//     let i = 0;
//     while(temp != 0){
//         last_digit = temp % 10;
//         res = last_digit * (2 ** i);
//         decimal += res;
//         temp = parseInt(temp / 10);
//         i += 1;
//         // console.log(res)
//     }

//     return decimal
// }

// console.log("before shifting decimal value : ", binaryToDecimal(1001))
// let shift = left_shift_bit(1111, 2)
// console.log("after shifting decimal value : ", binaryToDecimal(shift))





// =============================================================


//  right shift on decimal number

const right_shift_bit_through_decimal = (num, n) => {
    return parseInt(num / (2 ** n))
}

console.log(right_shift_bit_through_decimal(16,2))