// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
// Medium

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// - The left subtree of a node contains only nodes with keys strictly less than the node's key.
// - The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// - Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false

// ============================================
// ОБЪЯСНЕНИЕ:
// Нужно проверить, что для каждой ноды: слева все значения строго меньше, справа —
// строго больше. Итеративно (стек): храним для каждой ноды допустимый интервал (min, max).
// Корень — (-Infinity, Infinity). Для ноды проверяем: node.val должен быть в (min, max).
// Левый потомок наследует max = node.val, правый — min = node.val. Если где-то
// node.val <= min или node.val >= max — дерево не валидное BST.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) — стек
// ============================================

var isValidBST = function(root) {
    if (!root) return true;

    const stack = [[root, -Infinity, Infinity]];

    while (stack.length) {
        const [node, min, max] = stack.pop();

        if (!node) continue;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        stack.push([node.right, node.val, max]);
        stack.push([node.left, min, node.val]);
    }

    return true;
};
