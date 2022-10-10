var isPalindrome = function(head) {
    let ls = []
    current = head;
    
    while(current != null){
        ls.push(current.val);
        current = current.next
    }
    
    console.log("list  ->  ", ls)   
    
    let size = ls.length;
    let reverseList = [...ls].reverse()
    
    console.log("Reverse list  ->  ", reverseList)   
    
    console.log("Size   ->", size)
    
    
    let count = 0
    for(let i =0;i < size -1; i++){
        if(ls[i] === reverseList[i]){
            count += 1
        }
    }
    
    console.log("Count   -> ", count)
    
    console.log("________________")
    
    if (count+1 == size){
        return true
    }
    else{
        return false
    }
};







// var isPalindrome = function(head) {
//     let ls = []
//     current = head;
    
//     while(current != null){
//         ls.push(current.val);
//         current = current.next
//     }
    
//     console.log("list  ->  ", ls)   
    
//     let size = ls.length;
//     console.log("Size   ->", size)
//     let count = 0
//     for(let i =0;i < parseInt(size/2); i++){
//         if(ls[i] === ls[size - i -  1]){
//             count += 1
//         }
//     }
    
    
//     if (count == parseInt(size/2)){
//         return true
//     }
//     else{
//         return false
//     }
// };