/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
 var maxScoreWords = function(words, letters, score) {
    let obj = {}
    let i =0 
    
    let filtered = score.filter(val => val !=0)
    console.log(filtered)
    for(let character of letters){
        if(!obj[character]){
            obj[character] = filtered[i]
            i += 1
        }
    }
    
    let ls = []
    let result = 0
    for(let word of words){
        for(let chr of word){
            // console.log(chr, obj[chr])
            if (obj[chr]){
                result = result + obj[chr]
            }
            else{
                result = result + 0
            }
            
        }
        ls.push(result)
        result = 0
    }
    
    let max = 0
    for(let i= 0;i<ls.length;i++){
        for(let j = i+1;j< ls.length;j++){
            if (max < (ls[i] + ls[j])){
                max = (ls[i] + ls[j])
            }
        }
    }
    
    console.log(obj)
    console.log(ls, max)
    return max
};