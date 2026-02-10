// 1325. Delete Leaves With a Given Value
// https://leetcode.com/problems/delete-leaves-with-a-given-value/
// Medium

// Given a binary tree root and an integer target, delete all the leaf nodes with value target.
// Note that once you delete a leaf node with value target, if its parent node becomes a leaf node
// and has the value target, it should also be deleted (you need to continue doing that until you cannot).

// Example 1:
// Input: root = [1,2,3,2,null,2,4], target = 2
// Output: [1,null,3,null,4]

// Example 2:
// Input: root = [1,3,3,3,2], target = 3
// Output: [1,3,null,null,2]

// ============================================
// ОБЪЯСНЕНИЕ:
// Задача решается рекурсией (пост-обход, DFS). Удалять листья с value === target нужно
// снизу вверх, чтобы после удаления листьев родитель мог сам стать листом и тоже быть
// удалён, если его значение равно target.
// 1. Базовый случай: если root === null, возвращаем null.
// 2. Рекурсивно обрабатываем левое и правое поддеревья и "подвешиваем" результат
//    к root.left и root.right (там могут вернуться null — листья удалены).
// 3. После этого проверяем: если текущий узел стал листом (нет left и right)
//    и root.val === target, возвращаем null (удаляем узел), иначе возвращаем root.
// Таким образом все листья с target удаляются, и каскадно удаляются родители,
// ставшие листьями с target.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(h) — высота дерева для стека вызовов
// ============================================

var removeLeafNodes = function(root, target) {
    if(!root) return null

    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    if(!root.left && !root.right && root.val === target){
        return null
    }

    return root
};
