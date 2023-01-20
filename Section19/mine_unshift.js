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
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }
  set(val, idx) {
    let current = this.get(idx);
    if (!current) return false;
    current.val = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unShift(val);
    const newNode = new Node(val);
    let targetBefore = this.get(idx - 1);
    let temp = targetBefore.next;
    targetBefore.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prev = this.get(idx - 1);
    let remove = this.get(idx);
    prev.next = remove.next;
    this.length--;
    return remove;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; ++i) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
let list = new SinglyLinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);

console.log(list);
// list.insert(0, "A");
// list.insert(2, "B");
// list.insert(5, "F");

// console.log(list);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
// console.log(list.get(4));
list.reverse();

console.log(list);
list.print();
// list.unShift("No no no");
// console.log(list);
// list.unShift("Yes yes yes");
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);

// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
