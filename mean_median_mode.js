// ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18]
ls = [400, 240, 310, 570, 600, 600, 1000, 400, 990, 1000]


// MEAN
const mean = (ls.reduce((result, value) => { return result + value}))/ls.length
console.log("MEAN : ",mean);


// MEDIAN
ls.sort(function(a, b){return a-b})
const medianIndex = (ls) => {
    if(ls.length % 2 !== 0)
    {
        return ls[Math.floor((ls.length)/2)]
    }
    else{
        nextIndex = Math.floor(ls.length)/2
        prevIndex = Math.ceil(ls.length)/2
        result = (ls[nextIndex] + ls[prevIndex])/2
        return result;
    }
}

console.log("MEDIAN : ", medianIndex(ls));


// MODE

const modeNumber = (ls) => {
    const obj = {}

    ls.forEach(element => {
        if ( !obj[element] ){
            obj[element] = 1;
        }
        else{
            obj[element] += 1; 
        }
    });


    let heighestValue = 0
    let heighestValueKey = 0
    for (key in obj){
        if(obj[key] >= heighestValue && key > heighestValueKey){
            heighestValue = obj[key]
            heighestValueKey = key
        }
    }

    return heighestValue, heighestValueKey
}

console.log("MODE : ", Number(modeNumber(ls)))

