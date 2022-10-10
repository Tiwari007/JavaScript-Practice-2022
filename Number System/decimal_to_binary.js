const decimalToBinary = (num) => {
    let temp = num;
    let binary = "";
    while(temp != 0){
        rem = temp % 2;
        temp = parseInt(temp / 2);
        binary += rem;
    }

    return binary.split("").reverse().join("");;

}

console.log(decimalToBinary(10))    //  Expected : 1010
console.log(decimalToBinary(15))    //  Expected : 1111