//  left shift on binary number  

// const left_shift_bit_through_binary = (num, n) => {

//     let stringOfZeros = "";
//     for(let i =0;i<n; i++){
//         stringOfZeros += "0"
//     }

//     return num + "" + stringOfZeros
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
// let shift = left_shift_bit_through_binary(1001, 2)
// console.log("after shifting decimal value : ", binaryToDecimal(shift))





// =======================================================


//  left shift on decimal number

const left_shift_bit_through_decimal = (num, n) => {
    return num * (2 ** n)
}

console.log(left_shift_bit_through_decimal(5,2))