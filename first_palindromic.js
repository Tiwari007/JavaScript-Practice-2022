var firstPalindrome = function(words) {
    for( let word of words){
        if((word.split("").reverse().join("")) === word){
            return word
        }
    }
    return ""
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))


//  PYTHON CODE

// class Solution:
//     def firstPalindrome(self, words: List[str]) -> str:
//         ls = []
//         rev = []
//         for word in words:
//             if word[::-1] == word:
//                 return word
//         return ""
        
        