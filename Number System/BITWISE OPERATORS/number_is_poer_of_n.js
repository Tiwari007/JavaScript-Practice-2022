const is_number_power_of_n = (num, n) => {
    return ((num & (num -1)) == 0) && (num % (n -1) == 1)
}

console.log(is_number_power_of_n(64,4))    //  is 64 is power of 4 // true