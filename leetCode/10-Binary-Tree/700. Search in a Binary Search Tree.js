// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/
// Easy

// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree
// rooted with that node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// ============================================
// ОБЪЯСНЕНИЕ:
// В BST для каждой ноды справедливо: справа — значения больше, слева — меньше.
// Поэтому можно идти рекурсивно: если val совпадает с root.val — возвращаем root;
// если val < root.val — ищем в левом поддереве; иначе — в правом. Если дошли до
// пустого узла (root === null), искомого значения нет — возвращаем null.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(h) — высота дерева, в среднем O(log n) для сбалансированного
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(h) — стек вызовов рекурсии
// ============================================

var searchBST = function(root, val) {
  if(!root){
    return null
  }

  if(root.val === val) return root

  if(val < root.val){
    return searchBST(root.left, val)
  }else{
    return searchBST(root.right, val)
  }
};
