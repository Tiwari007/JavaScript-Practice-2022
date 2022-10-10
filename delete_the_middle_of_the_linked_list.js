var deleteMiddle = function(head) {
    let count = 0
    current = head;
    while(current != null){
        current = current.next
        count++;
    }
    if(count == 1)
        {
            return null;
        }
    let size = parseInt(count / 2)
    
    current2 = head
   for(let i=0;i<size-1;i++)
       {
           current2 = current2.next;
       }
     current2.next = current2.next.next;
    // head=current2;
     console.log(head)
    console.log(head)
    return head;
};