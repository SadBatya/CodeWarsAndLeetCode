// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
      if (list1.val > list2.val) {
          cur.next = list2;
          list2 = list2.next;
      } else {
          cur.next = list1;
          list1 = list1.next;
      }
      cur = cur.next;
  }

  cur.next = list1 || list2;

  return dummy.next; 
};