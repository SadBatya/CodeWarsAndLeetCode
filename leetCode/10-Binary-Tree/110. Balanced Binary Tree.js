// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/
// Easy

// Given a binary tree, determine if it is height-balanced.
// A height-balanced binary tree is a binary tree in which the depth of the two
// subtrees of every node never differs by more than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// ============================================
// ОБЪЯСНЕНИЕ:
// Дерево сбалансировано, если для каждой ноды разница высот левого и правого
// поддеревьев не больше 1. DFS: функция возвращает высоту поддерева. Если узел
// null — высота 0. Рекурсивно получаем высоты left и right; если любая из них -1
// (уже нашли несбалансированность ниже), пробрасываем -1. Если |left - right| > 1,
// возвращаем -1. Иначе возвращаем 1 + max(left, right). В конце проверяем:
// результат от корня не равен -1.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(h) — стек вызовов, h — высота дерева
// ============================================

var isBalanced = function(root) {
    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        if (left === -1) return -1;

        const right = dfs(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    };

    return dfs(root) !== -1;
};
