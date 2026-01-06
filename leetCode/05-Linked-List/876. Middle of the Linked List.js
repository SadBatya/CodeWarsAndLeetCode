// 876. Middle of the Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// ============================================
// РЕШЕНИЕ:
// Используем технику "черепахи и зайца" (tortoise and hare). Медленный указатель
// движется на один шаг, быстрый - на два. Когда быстрый достигнет конца,
// медленный будет в середине.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по списку
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var middleNode = function (head) {
  // Шаг 1: Инициализируем два указателя: медленный и быстрый
  let slow = head;
  let fast = head;

  // Шаг 2: Продолжаем пока быстрый указатель не достигнет конца
  while (fast && fast.next) {
    // Шаг 3: Быстрый указатель движется на два шага
    fast = fast.next.next;
    // Шаг 4: Медленный указатель движется на один шаг
    slow = slow.next;
  }

  // Шаг 5: Когда быстрый достиг конца, медленный в середине
  return slow;
};
