class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node(" are");
// first.next.next.next.next = new Node(" you");

// console.log(first.val);
// console.log(first.next.val);
// console.log(first.next.next.val);
// console.log(first.next.next.next.val);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("2023");
list.push("GOODBYE");
list.push("2022");

console.log(list);
