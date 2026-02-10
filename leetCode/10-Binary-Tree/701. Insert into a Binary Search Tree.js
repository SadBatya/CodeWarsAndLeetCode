// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Medium

// You are given the root node of a binary search tree (BST) and a value to insert
// into the tree. Return the root node of the BST after the insertion. It is guaranteed
// that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the
// tree remains a BST after insertion. You can return any of them.

// Example 1:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]

// Example 2:
// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]

// ============================================
// ОБЪЯСНЕНИЕ:
// Дерево не балансируем — вставка в конец подходящей ветки. Рекурсия: если дошли
// до null (место для новой ноды), создаём и возвращаем new TreeNode(val). Иначе
// если val < root.val — вставляем в левое поддерево (root.left = insertIntoBST(...)),
// иначе в правое. Возвращаем root, чтобы не менять структуру выше по дереву.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(h) — высота дерева
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(h) — стек вызовов рекурсии
// ============================================

var insertIntoBST = function(root, val) {
  if(!root){
    return new TreeNode(val)
  }

  if(val < root.val){
    root.left = insertIntoBST(root.left, val)
  }else{
    root.right = insertIntoBST(root.right, val)
  }

  return root
};
