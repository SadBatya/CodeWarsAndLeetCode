// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Medium

// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// ============================================
// ОБЪЯСНЕНИЕ:
// Нужно пройти по каждому уровню дерева и каждый уровень сложить сначала в массив,
// а затем положить этот массив в результирующий массив и вернуть его.
// Используем BFS (обход в ширину) с очередью:
// 1. Кладём корень в очередь.
// 2. На каждой итерации обрабатываем ровно levelSize узлов (текущий уровень).
// 3. Для каждого узла добавляем значение в resultLevel, детей — в конец очереди.
// 4. После прохода уровня пушим resultLevel в result.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) — каждый узел посещаем один раз
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) — очередь и результат
// ============================================

var levelOrder = function(root) {
    if(!root) return []

    const result = []
    const q = [root]

    while(q.length){
        const levelSize = q.length
        const resultLevel = []

        for(let i = 0; i < levelSize; i++){
            const node = q.shift()

            resultLevel.push(node.val)

            if(node.left){
                q.push(node.left)
            }

            if(node.right){
                q.push(node.right)
            }
        }

        result.push(resultLevel)
    }

    return result
};
