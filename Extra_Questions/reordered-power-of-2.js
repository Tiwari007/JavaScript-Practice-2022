// Return true if A represents a valid power of 2
const isPowerOfTwo = function(ls){
    if(ls[0] == 0){  // no leading zero
        return false;
    }

    // Build eg. A = [1, 2, 8] -> N = 128
    let p = 0;
    for(let x of ls){
        p = 10 * p + x
    }

    // Remove the largest power of 2
    while(p > 0 && ((p - 1) == 0)){
        p >>= 1
    }

    // Check that there are no other factors besides 2
    return p == 1
}

const permutations = function(ls, start){
    if(start == ls.length){
        return isPowerOfTwo(ls)
    }

    // Choose some index i from [start, A.length - 1]
    // to be placed into position A[start].

    for(let i = start; i < ls.length ; i++){
        swap(ls, start, i);

        // For each such placement of A[start], if a permutation
        // of (A[start+1], A[start+2], ...) can result in A
        // representing a power of 2, return true.

        if(permutations(ls, start + 1)){
            return true;
        }

        swap(ls, start, i)
    }

    return false;

}

const swap = function(ls, i , j){
    let temp = ls[i];
    ls[i] = ls[j];
    ls[j] = temp;
}



const reorderedPowerOf2 = function(n) {
    //  N = 128
    // Build eg. N = 128 -> A = [1, 2, 8]
    let s = n + "";
    console.log(s);

    ls = []
    ls.length = s.length;
    for (let i =0; i<s.length; i++){
        ls[i] = s[i] - '0';
    }

    console.log(ls);
    return permutations(ls, 0)

};

console.log(reorderedPowerOf2(460));