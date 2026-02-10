// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
// Medium

// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:
// Input: root = []
// Output: []

// ============================================
// ОБЪЯСНЕНИЕ:
// "Вид справа" — это последний узел на каждом уровне при обходе слева направо.
// Снова BFS по уровням. На каждом уровне после цикла for последний обработанный
// узел — это как раз правый видимый. Поэтому в result добавляем значение узла
// только когда i === levelSize - 1 (последний узел на уровне).
// 1. Очередь, уровень за уровнем.
// 2. В цикле по уровню: если текущий индекс i — последний (levelSize - 1),
//    пушим node.val в result.
// 3. Детей по-прежнему добавляем в очередь (left, затем right).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n)
// ============================================

var rightSideView = function(root) {
    if (!root) return []

    const result = []
    const q = [root]

    while (q.length) {
        const levelSize = q.length

        for (let i = 0; i < levelSize; i++) {
            const node = q.shift()

            if (i === levelSize - 1) {
                result.push(node.val)
            }

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }

    return result
};
