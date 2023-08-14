class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
    }

    this.head = node;
    this.length++;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
    }

    cur.next = node;
    this.length++;
  }

  printList() {
    if (!this.head) return null;

    let res = "";
    let cur = this.head;

    while (cur) {
      res = res + `value: ${cur.value}, `;
      cur = cur.next;
    }

    return res;
  }

  find(target) {
    let cur = this.head;

    while (cur) {
      if (cur.value == target) {
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  getOnIndex(index) {
    if (index < 0 || index > this.length - 1) return null;

    let cur = this.head;

    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }

    return cur.value;
  }

  reverseList() {
    let prev = null;
    let cur = this.head;

    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  }

  insert(value, index) {
    if (index < 0 || index > this.length - 1) return;

    let cur = this.head;
    let prev = null;

    for (let i = 0; i <= index - 1; i++) {
      prev = cur;
      cur = cur.next;
    }

    const node = new Node(value, cur)
    prev.next = node
    this.length++
  }
}

const list = new LinkedList();

list.unshift("d");
list.unshift("c");
list.unshift("a");

// console.log(list.printList());

list.insert("b", 1);

console.log(list.printList());