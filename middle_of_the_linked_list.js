var middleNode = function(head) {
    let count = 0
    current = head;
    while(current != null){
        current = current.next
        count++;
    }
    
    let size = parseInt(count / 2)
    
    current2 = head
    let count2 = 0
    while(count2 < size){
        current2 = current2.next
        count2++
        console.log(current2.val)
    }
    
    console.log(current2)
    head = current2
    return head
}