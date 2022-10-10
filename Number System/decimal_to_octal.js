const decimalToOctal = (num) => {
    let temp = num;
    let octal = "";
    while(temp != 0){
        rem = temp % 8;
        temp = parseInt(temp / 8);
        octal += rem;
    }

    return octal.split("").reverse().join("");

}

console.log(decimalToOctal(17))    
console.log(decimalToOctal(10))   