// Objective

// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).


function getLetter(s) {
    let letter;
    // Write your code here
    
    if(s.charAt(0).match(/[aeiou]/gi)){
        letter = 'A'
    }
    else if(s.charAt(0).match(/[bcdfg]/gi)){
        letter = 'B'
    }
    else if(s.charAt(0).match(/[hjklm]/gi)){
        letter = 'C'
    }
    else if(s.charAt(0).match(/[npqrstvwxyz]/gi)){
        letter = 'D'
    }
    return letter;
}

console.log(getLetter("heroismywish"));
