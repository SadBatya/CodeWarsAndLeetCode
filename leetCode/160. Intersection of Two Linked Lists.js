// 160. Intersection of Two Linked Lists
// Easy
// Topics
// Companies
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Custom Judge:

// The inputs to the judge are given as follows (your program is not given these inputs):

// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

// ============================================
// РЕШЕНИЕ:
// Используем технику "двух указателей с переключением". Когда указатель достигает конца
// одного списка, переключаем его на начало другого. Это выравнивает указатели,
// так как они пройдут одинаковое расстояние (a + b = b + a), и встретятся в точке пересечения.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(m + n) где m и n - длины списков
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

let getIntersectionNode = function (headA, headB) {
  // Шаг 1: Проверяем, что оба списка не пусты
  if (!headA || !headB) return null;

  // Шаг 2: Создаем два указателя, начинаем с голов списков
  let pointA = headA;
  let pointB = headB;

  // Шаг 3: Продолжаем пока указатели не встретятся
  while (pointA !== pointB) {
    // Шаг 4: Если pointA достиг конца списка A
    if (pointA === null) {
      // Шаг 5: Переключаем на начало списка B
      pointA = headB;
    } else {
      // Шаг 6: Иначе двигаемся дальше по списку A
      pointA = pointA.next;
    }
    // Шаг 7: Если pointB достиг конца списка B
    if (pointB === null) {
      // Шаг 8: Переключаем на начало списка A
      pointB = headA;
    } else {
      // Шаг 9: Иначе двигаемся дальше по списку B
      pointB = pointB.next;
    }
  }

  // Шаг 10: Возвращаем узел пересечения (или null, если пересечения нет)
  return pointA;
};

// let getIntersectionNode = function (headA, headB) {

// Второй способ решение задачи
// let node1 = headA,
//   node2 = headB;
// while (node1 !== node2) {
//   node1 = node1 ? node1.next : headB;
//   node2 = node2 ? node2.next : headA;
// }
// return node1;
// }

// Третий способ решения задачи
// var getIntersectionNode = function(headA, headB) {
//   if (!headA || !headB) {
//       return null;
//   }

//   let lenA = 0;
//   let lenB = 0;

//   let curA = headA;
//   let curB = headB;

//   // считаем длину списка A
//   while (curA) {
//       lenA++;
//       curA = curA.next;
//   }

//   // считаем длину списка B
//   while (curB) {
//       lenB++;
//       curB = curB.next;
//   }

//   curA = headA;
//   curB = headB;

//   // выравниваем указатели
//   if (lenA > lenB) {
//       let diff = lenA - lenB;
//       while (diff--) {
//           curA = curA.next;
//       }
//   } else {
//       let diff = lenB - lenA;
//       while (diff--) {
//           curB = curB.next;
//       }
//   }

//   // идём синхронно и ищем пересечение
//   while (curA && curB) {
//       if (curA === curB) {
//           return curA;
//       }
//       curA = curA.next;
//       curB = curB.next;
//   }

//   return null;
// };
