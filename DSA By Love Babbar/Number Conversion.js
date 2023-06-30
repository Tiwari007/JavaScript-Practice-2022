// Decimal to Binary
{
let ans =0 ;
let n = 21;
let i = 0;

num = n;

while(num!= 0){
    let bit = num & 1;
    ans += (Math.pow(10,i) * bit)
    num = num >> 1;
    i++;
}
console.log(`Decimal No. ${n} in binary notation is ${ans}`)
}



// Binary to Decimal

{
let ans =0 ;
let n = 11111;
let i = 0;

num = n;

while(num!= 0){
    let last_digit = num % 10;
    ans += (Math.pow(2,i) * last_digit)
    num = parseInt(num / 10);
    i++;
}
console.log(`Binary No. ${n} in Decimal notation is ${ans}`)
}