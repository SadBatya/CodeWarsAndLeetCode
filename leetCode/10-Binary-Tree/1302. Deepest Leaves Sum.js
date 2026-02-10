// 1302. Deepest Leaves Sum
// https://leetcode.com/problems/deepest-leaves-sum/
// Medium

// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example 1:
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Example 2:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

// ============================================
// ОБЪЯСНЕНИЕ:
// Нужно найти сумму значений всех узлов на самом глубоком уровне.
// BFS по уровням: на каждой итерации считаем сумму текущего уровня (currentLevelSum).
// После прохода уровня присваиваем deepestLevelSum = currentLevelSum. Когда очередь
// станет пустой, последнее значение deepestLevelSum — это как раз сумма последнего
// (самого глубокого) уровня.
// 1. Очередь с корнем.
// 2. Пока очередь не пуста: фиксируем levelSize, обнуляем currentLevelSum.
// 3. Обрабатываем levelSize узлов: добавляем node.val к currentLevelSum, детей в очередь.
// 4. После цикла: deepestLevelSum = currentLevelSum.
// 5. Возвращаем deepestLevelSum.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n)
// ============================================

var deepestLeavesSum = function(root) {
    if(!root) return 0

    const q = [root]
    let deepestLevelSum = 0

    while(q.length){
        let levelSize = q.length
        let currentLevelSum = 0

        for(let i = 0; i < levelSize; i++){
            const node = q.shift()

            currentLevelSum += node.val

            if(node.left){
                q.push(node.left)
            }

            if(node.right){
                q.push(node.right)
            }
        }

        deepestLevelSum = currentLevelSum
    }

    return deepestLevelSum
};
