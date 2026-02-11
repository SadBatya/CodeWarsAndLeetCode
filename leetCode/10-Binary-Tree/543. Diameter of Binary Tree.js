// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
// Easy

// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two
// nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

// ============================================
// ОБЪЯСНЕНИЕ:
// Диаметр — максимальное число рёбер между любыми двумя узлами. Самый длинный путь
// может проходить через какой-то узел: тогда его длина = высота левого поддерева +
// высота правого (в рёбрах). Обходим дерево DFS: для каждой ноды считаем высоты left
// и right; кандидат на диаметр — left + right; возвращаем высоту поддерева
// 1 + max(left, right). Храним в переменной diameter максимум из всех left + right
// и в конце возвращаем его.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(h) — стек вызовов, h — высота дерева
// ============================================

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }

    height(root);
    return diameter;
};
