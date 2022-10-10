const binaryToDecimal = (num) => {
    let decimal = 0;
    let temp = num;
    let i = 0;
    while(temp != 0){
        last_digit = temp % 10;
        res = last_digit * (2 ** i);
        decimal += res;
        temp = parseInt(temp / 10);
        i += 1;
        // console.log(res)
    }

    return decimal
}

console.log(binaryToDecimal(111))