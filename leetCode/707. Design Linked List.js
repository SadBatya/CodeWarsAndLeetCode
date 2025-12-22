// 707. Design Linked List
// Medium
// Topics
// premium lock icon
// Companies
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);

  node.next = this.head;
  this.head = node;

  if (this.size === 0) {
    this.tail = node;
  }

  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);

  if (this.size === 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }

  const node = new Node(val);
  node.next = prev.next;
  prev.next = node;

  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    if (this.size === 1) {
      this.tail = null;
    }
    this.size--;
    return;
  }

  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }

  if (prev.next === this.tail) {
    this.tail = prev;
  }

  prev.next = prev.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
