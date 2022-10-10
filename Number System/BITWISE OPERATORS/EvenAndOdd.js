const EvenAndOdd = (num) => {
    if(num & 1 == 1){
        return "Odd"
    }
    else{
        return "Even"
    }
}


console.log(EvenAndOdd(23))   // Odd
console.log(EvenAndOdd(22))   // Even