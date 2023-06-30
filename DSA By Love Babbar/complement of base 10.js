// 5 (101) => 2 (010)


// _______________Approch 1____________

// let num = 8
// let result = 0
// let temp = num;

// if(num == 0) return 1;

// while (temp != 0) {
//     let bit = temp & 1
//     console.log("bit", bit, typeof (bit));
//     if (bit == 1) {
//         result = (result * 10) + 0
//     }
//     else {
//         result = (result * 10) + 1
//     }
//     temp = temp >> 1
// }

// console.log(`complement of ${num} is ${result}`) // now i have to reverse the number so we can find the answer



// _______________Approch 2 (By creating Mask)  5 => 2  => ~(101) & 111 => 010 & 111 => 010 ____________

newFunction()



function newFunction() {
    let num = 19
    let temp = num
    let result = 0
    let mask = 0

    if (temp == 0) {
        console.log(`complement of 0 is 1`)
    }
    else {
        while (temp != 0) {
            mask = (mask << 1) | 1
            temp = temp >> 1
        }

        result = (~num) & mask

        console.log(`complement of ${num} is ${result}`)
    }
}

