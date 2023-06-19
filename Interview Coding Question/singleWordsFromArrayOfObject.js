const arr = [['hello', 'sanoyara', 'alpha'], ['alpha', 'bravo', 'bravo'], ['ciao', 'Musaimas', 'alpha']]

// First Question collect all ele in single array which is unique
const newArr = []
arr.map(ele => newArr.push(...ele))
const unique = Array.from(new Set(newArr))
console.log(unique); // [ 'hello', 'sanoyara', 'alpha', 'bravo', 'ciao', 'Musaimas' ]


// Second Question collect 

let resultHash = {}
arr.map(ele => {
    const hash = {}
    ele.map(newEle => {
        if(!hash[newEle]) hash[newEle] = 1
        else hash[newEle] += 1
    })
    resultHash = { ...resultHash, ...hash}
})

console.log("resultHash: ", resultHash);

for(let i in resultHash){
    // console.log("i", i);
    if(resultHash[i] > 1) {
        console.log("remove ", i)
    }
}


// Third Question


// Second Question collect 

let resultHash2 = []
arr.map(ele => {
    let hash = {}
    ele.map(newEle => {
        if(!hash[newEle]) hash[newEle] = 1
        else hash[newEle] += 1
    })
    resultHash2.push(hash)
})

console.log("resultHash2: ", resultHash2);