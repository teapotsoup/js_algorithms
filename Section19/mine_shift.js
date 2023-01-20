class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}
let list = new SinglyLinkedList();
list.push("Hello");
list.push("2023");
list.push("Bye");
list.push("2022");

// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);

list.shift();
console.log(list);
list.shift();
console.log(list);
list.shift();
console.log(list);
list.shift();
console.log(list);
