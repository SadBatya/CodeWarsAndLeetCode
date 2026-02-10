// 515. Find Largest Value in Each Tree Row
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// Medium

// Given the root of a binary tree, return an array of the largest value in each row
// of the tree (0-indexed).

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]

// Example 2:
// Input: root = [1,2,3]
// Output: [1,3]

// ============================================
// ОБЪЯСНЕНИЕ:
// Здесь всё то же самое, что и в Level Order Traversal: обход в ширину по уровням.
// Отличие: на каждом уровне мы не собираем массив значений, а ищем максимальное
// значение (levelMax). В результирующий массив добавляем именно levelMax после
// обработки всех узлов уровня.
// 1. Очередь, обрабатываем уровень за уровнем.
// 2. Для каждого уровня: levelMax = -Infinity, при обработке узла обновляем
//    levelMax = Math.max(levelMax, node.val).
// 3. В конец result пушим levelMax.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n)
// ============================================

var largestValues = function(root) {
    if(!root) return []

    const result = []
    const q = [root]

    while(q.length){
        const levelSize = q.length
        let levelMax = -Infinity

        for(let i = 0; i < levelSize; i++){
            const node = q.shift()
            levelMax = Math.max(levelMax, node.val)

            if(node.left){
                q.push(node.left)
            }

            if(node.right){
                q.push(node.right)
            }
        }

        result.push(levelMax)
    }

    return result
};
