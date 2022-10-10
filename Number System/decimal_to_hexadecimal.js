const decimalToHexaDecimal = (num) => {
    let temp = num;
    let octal = "";
    while(temp != 0){
        rem = temp % 16;
        temp = parseInt(temp / 16);
        octal += rem;
    }

    return octal.split("").reverse().join("");

}

console.log(decimalToHexaDecimal(17))   
console.log(decimalToHexaDecimal(10))   