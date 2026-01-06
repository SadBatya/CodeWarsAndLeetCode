// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }

  return prev;
};
