// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// ============================================
// РЕШЕНИЕ:
// Используем технику "dummy node" для упрощения логики.
// Сравниваем значения узлов из обоих списков и добавляем меньший к результату.
// Продолжаем пока оба списка не закончатся, затем добавляем остаток.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n + m) где n и m - длины списков
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var mergeTwoLists = function(list1, list2) {
  // Шаг 1: Создаем фиктивный узел для упрощения логики
  let dummy = new ListNode();
  // Шаг 2: Указатель на текущий узел в результирующем списке
  let cur = dummy;

  // Шаг 3: Пока оба списка не пусты
  while (list1 && list2) {
      // Шаг 4: Сравниваем значения узлов
      if (list1.val > list2.val) {
          // Шаг 5: Если значение из list2 меньше, добавляем его
          cur.next = list2;
          list2 = list2.next;
      } else {
          // Шаг 6: Иначе добавляем узел из list1
          cur.next = list1;
          list1 = list1.next;
      }
      // Шаг 7: Переходим к следующему узлу в результате
      cur = cur.next;
  }

  // Шаг 8: Добавляем остаток непустого списка
  cur.next = list1 || list2;

  // Шаг 9: Возвращаем голову результирующего списка (пропуская dummy)
  return dummy.next; 
};