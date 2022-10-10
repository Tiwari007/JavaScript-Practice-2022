const toggle_ith_bit = (num, i) => {

    temp = 1 << (i-1)
    console.log(temp, num)
    return num | temp
}

console.log(toggle_ith_bit(37,3))