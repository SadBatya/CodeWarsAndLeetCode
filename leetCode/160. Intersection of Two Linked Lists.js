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

let getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pointA = headA;
  let pointB = headB;

  while (pointA !== pointB) {
    if (pointA === null) {
      pointA = headB;
    } else {
      pointA = pointA.next;
    }
    if (pointB === null) {
      pointB = headA;
    } else {
      pointB = pointB.next;
    }
  }

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
