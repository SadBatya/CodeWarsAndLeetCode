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

// ============================================
// РЕШЕНИЕ:
// Реализуем односвязный список с поддержкой операций: get, addAtHead, addAtTail,
// addAtIndex, deleteAtIndex. Используем класс Node для узлов и отслеживаем head, tail и size.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: 
//   - get: O(n) где n - индекс
//   - addAtHead: O(1)
//   - addAtTail: O(1)
//   - addAtIndex: O(n) где n - индекс
//   - deleteAtIndex: O(n) где n - индекс
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) где n - количество узлов
// ============================================

// Шаг 1: Класс для узла списка
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Шаг 2: Конструктор связанного списка
var MyLinkedList = function () {
  this.head = null;  // Голова списка
  this.tail = null;  // Хвост списка
  this.size = 0;     // Размер списка
};

// Шаг 3: Получение значения узла по индексу
MyLinkedList.prototype.get = function (index) {
  // Шаг 4: Проверяем валидность индекса
  if (index < 0 || index >= this.size) {
    return -1;
  }

  // Шаг 5: Проходим до нужного узла
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  // Шаг 6: Возвращаем значение узла
  return current.val;
};

// Шаг 7: Добавление узла в начало списка
MyLinkedList.prototype.addAtHead = function (val) {
  // Шаг 8: Создаем новый узел
  const node = new Node(val);

  // Шаг 9: Новый узел указывает на текущую голову
  node.next = this.head;
  // Шаг 10: Новый узел становится головой
  this.head = node;

  // Шаг 11: Если список был пуст, новый узел также является хвостом
  if (this.size === 0) {
    this.tail = node;
  }

  // Шаг 12: Увеличиваем размер
  this.size++;
};

// Шаг 13: Добавление узла в конец списка
MyLinkedList.prototype.addAtTail = function (val) {
  // Шаг 14: Создаем новый узел
  const node = new Node(val);

  // Шаг 15: Если список пуст, новый узел становится и головой, и хвостом
  if (this.size === 0) {
    this.head = node;
    this.tail = node;
  } else {
    // Шаг 16: Иначе добавляем после текущего хвоста
    this.tail.next = node;
    this.tail = node;
  }

  // Шаг 17: Увеличиваем размер
  this.size++;
};

// Шаг 18: Добавление узла по индексу
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // Шаг 19: Проверяем валидность индекса
  if (index < 0 || index > this.size) return;

  // Шаг 20: Если индекс 0, добавляем в начало
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  // Шаг 21: Если индекс равен размеру, добавляем в конец
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  // Шаг 22: Находим узел перед позицией вставки
  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }

  // Шаг 23: Создаем новый узел и вставляем его
  const node = new Node(val);
  node.next = prev.next;
  prev.next = node;

  // Шаг 24: Увеличиваем размер
  this.size++;
};

// Шаг 25: Удаление узла по индексу
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // Шаг 26: Проверяем валидность индекса
  if (index < 0 || index >= this.size) return;

  // Шаг 27: Если удаляем голову
  if (index === 0) {
    this.head = this.head.next;
    // Шаг 28: Если был только один элемент, обнуляем хвост
    if (this.size === 1) {
      this.tail = null;
    }
    this.size--;
    return;
  }

  // Шаг 29: Находим узел перед удаляемым
  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }

  // Шаг 30: Если удаляем хвост, обновляем указатель на хвост
  if (prev.next === this.tail) {
    this.tail = prev;
  }

  // Шаг 31: Пропускаем удаляемый узел
  prev.next = prev.next.next;
  // Шаг 32: Уменьшаем размер
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
