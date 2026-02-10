// 117. Populating Next Right Pointers in Each Node II
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// Medium

// Populate each next pointer to point to its next right node. If there is no next right node,
// the next pointer should be set to NULL. Initially, all next pointers are set to NULL.

// Example 1:
// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]

// ============================================
// ОБЪЯСНЕНИЕ:
// Нужно для каждого узла установить указатель next на "следующий узел справа"
// на том же уровне. Обход снова по уровням (BFS). На каждом уровне при обработке
// узлов подряд: предыдущий узел (prev) связываем с текущим: prev.next = curr,
// затем prev = curr. В начале уровня prev = null, поэтому для первого узла
// уровня next не меняем. Детей (left, right) добавляем в очередь как обычно.
// В итоге на каждом уровне узлы связываются слева направо через next.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) — очередь
// ============================================

var connect = function(root) {
    if(!root) return null

    const q = [root]

    while(q.length){
        let levelSize = q.length
        let prev = null

        for(let i = 0; i < levelSize; i++){
            let curr = q.shift()

            if(prev){
                prev.next = curr
            }

            prev = curr

            if(curr.left){
                q.push(curr.left)
            }

            if(curr.right){
                q.push(curr.right)
            }
        }
    }

    return root
};
