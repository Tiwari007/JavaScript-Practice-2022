const ith_bit = (num, i) => {

    temp = 1 << (i-1)
    console.log(temp, num)
    return num & temp
}

console.log(ith_bit(37,3))