var checkIfPangram = function(sentence) {
        
    obj = {}
    for( let word of sentence){
        if(!obj[word]){
            obj[word] = 1
        }
        else{
            obj[word] +=1
        }
    }
    var size = Object.keys(obj).length;
    console.log(size)
    if(size === 26){
        return true
    }
    else{
        return false
    }
    
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))