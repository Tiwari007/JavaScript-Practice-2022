// 1 - array.at()

const arr = [1,2,3,4,5,6]
console.log(arr.at(2))
console.log(arr.at(-1))


// 2 - regex match expression

const regex1 = RegExp('foo*', 'g')
const str1 = 'table football, foosball';

let array1;

while((array1 = regex1.exec(str1)) != null) {
    console.log(`Found ${array1[0]}. Next Start at ${regex1.lastIndex}.`);
}


//  3 - 