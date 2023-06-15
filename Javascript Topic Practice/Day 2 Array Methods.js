let arrA = [1, 2, 4, 6, 8, 4, 7, 9, 12]
let arrB = [1, 2, 4, 6, 8, 4, 7, 9, 12]

console.log(arrA + arrB);  // 1,2,4,6,8,4,7,9,121,2,4,6,8,4,7,9,12
console.log(arrA.indexOf(4));  // 2
console.log(arrA.join(""));  // "1246847912"
console.log(arrA.lastIndexOf(6));  // 3
console.log(arrA.reduceRight((curr, res) => curr + res));  // Sum of all elemenets : 53
console.log(arrA.slice(1, 5));  // [ 2, 4, 6, 8 ]  does't include last value
console.log(arrA.splice(1,5));  // [ 2, 4, 6, 8, 4 ]  it include last value 
console.log(arrB.toString());  // "1,2,4,6,8,4,7,9,12"
console.log(arrB.unshift(98));  // return the length of a updated aarray and add the value to front in array



// GLOBAL FUNCTIONS


const boom = () => {
    let a =5;
    let c = 89;
    return a + c
}
console.log(eval(boom()));


console.log(isFinite(-785647647646776));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity

console.log(Math.min(...arrB));   // 1
console.log(Math.sqrt(16));    // 4

