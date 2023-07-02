let arrForUnique = [1, 2, 3, 4, 3, 2, 1]
let arrForDuplicate = [1, 2, 3, 4, 5, 5, 6]


// 1st Approch - we can do these type of question using hash map (By creating object)

//  find out unique element from an array
{
    let obj = {}

    arrForUnique.map(ele => {
        if (obj[ele]) {
            obj[ele] += 1
        }
        else {
            obj[ele] = 1
        }
    })

    for (const [key, value] of Object.entries(obj)) {
        if (value == 1) console.log("unique value is", key);
    }
}



//  find out unique element from an array
{
    let obj = {}

    arrForDuplicate.map(ele => {
        if (obj[ele]) {
            obj[ele] += 1
        }
        else {
            obj[ele] = 1
        }
    })

    let duplicateArray = []
    for (const [key, value] of Object.entries(obj)) {
        if (value > 1) duplicateArray.push(key)
    }

    console.log("duplicate values are: ", ...duplicateArray);
}


// 2nd Approch - we can do these type of question using hash map (By creating object)

let unique = 0
let duplicate = 0

arrForUnique.map(ele=> unique^= ele)

console.log("unique value by using XOR method is", unique);


// for duplicate


// XOR for all array element
for(let i=0; i< arrForDuplicate.length; i++){
    duplicate ^= arrForDuplicate[i]
}

// XOR for 1 -> N
for(let i=1; i< arrForDuplicate.length; i++){
    duplicate ^= i
}

console.log("duplicate value by using XOR method is", duplicate);


