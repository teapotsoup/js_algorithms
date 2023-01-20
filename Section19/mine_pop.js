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
    // 매개변수가 없다
    // 리스트에 노드가 없을 경우 언디파인드 반환
    // 꼬리에 도달할때까지 루핑
    // 지운후 마지막 노드의 넥스트는 null
    // 지운후 마지막 노드를 테일이 가르킨다
    // 길이 감소
    // 리스트에 노드가 있을경우 지워진 노드를 반환
    if (!this.head) {
      return undefined;
    } else {
      if (this.head.next === null) {
        temp = this.head;
        this.head = null;
        this.tall = null;
        temp.length -= 1;
        return temp;
      } else {
        let current = this.head;
        while (current) {
          if (current.next.next === null) {
            let temp = current.next.next;
            current.next = null;
            this.tail = current;
            this.length -= 1;
            return temp;
          } else {
            current = current.next;
          }
        }
      }
    }
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
// list.push("2023");
// list.push("Bye");
// list.push("2022");

// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
list.pop();
console.log(list);
