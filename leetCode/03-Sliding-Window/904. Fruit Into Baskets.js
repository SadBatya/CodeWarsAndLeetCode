// Medium
// Topics
// premium lock icon
// Companies
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна. Поддерживаем Map с максимум двумя типами фруктов.
// Когда появляется третий тип, сжимаем окно слева, удаляя фрукты до тех пор,
// пока не останется только два типа. Находим максимальную длину окна.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - каждый элемент посещается максимум дважды
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - Map содержит максимум 2 элемента
// ============================================

var totalFruit = function (fruits) {
  // Шаг 1: Указатель на начало окна
  let begin = 0;
  // Шаг 2: Map для хранения типов фруктов и их количества в окне
  let map = new Map();
  // Шаг 3: Максимальное количество собранных фруктов
  let result = 0;

  // Шаг 4: Проходим по массиву, расширяя окно справа
  for (let i = 0; i < fruits.length; i++) {
    // Шаг 5: Добавляем текущий фрукт в Map
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);

    // Шаг 6: Пока в окне больше двух типов фруктов, сжимаем окно слева
    while (map.size > 2) {
      // Шаг 7: Уменьшаем количество фруктов типа fruits[begin]
      map.set(fruits[begin], map.get(fruits[begin]) - 1);
      // Шаг 8: Если количество стало 0, удаляем тип из Map
      if (map.get(fruits[begin]) === 0) {
        map.delete(fruits[begin]);
      }
      // Шаг 9: Сдвигаем начало окна вправо
      begin++;
    }

    // Шаг 10: Обновляем максимальное количество собранных фруктов
    result = Math.max(result, i - begin + 1);
  }

  // Шаг 11: Возвращаем результат
  return result;
};
