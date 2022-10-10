// const node1 = {
//     data: 100
// }

// const node2 = {
//     data: 200
// }

// node1.next = node2

// console.log(node1)

// _________________________________________________________________________________________
class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

// const N1 = new Node(100)
// console.log(N1)

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  //  INSERT FIRST NODE
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //  INSERT LAST NODE
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty make head
    if (!this.head) {
      this.head = node;
    }
    // else iterate through all data then put at last
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // INSERT AT INDEX
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index.  u can use insertFirst() function also as it is inserted on start
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;
    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before the index
      count++;
      current = current.next; // Node after the index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // GET AT INDEX
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // REMOVE AT INDEX
  removeAt(index){
    if(index>0 && index>this.size){
        return;
      }
      let current=this.head;
      let previous;
      let count=0;

      // remove first
      if(index === 0){
        this.head =current.next
      }
      else{
        while(count < index){
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
  }

  // CLEAR THE LIST
  clearList(){
    this.head = null;
    this.size = 0;
  }

  // PRINT LIST DATA
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertFirst(400);
ll.insertAt(250, 2);


// console.log(ll.head.next)

ll.printList();
console.log()

ll.getAt(1)
console.log()

ll.removeAt(0)
ll.printList();

console.log("clearing")

ll.clearList()
ll.printList();
