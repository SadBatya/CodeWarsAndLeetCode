// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// ============================================
// РЕШЕНИЕ:
// Проходим по массиву, накапливая сумму элементов. Каждый элемент результата
// равен сумме всех предыдущих элементов включая текущий.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - массив результатов размера n
// ============================================

var runningSum = function(nums) {
  // Шаг 1: Переменная для накопления суммы
  let total = 0;
  // Шаг 2: Массив для результата
  let arr = [];
  
  // Шаг 3: Проходим по массиву
  for (let i = 0; i < nums.length; i++) {
    // Шаг 4: Добавляем текущий элемент к сумме
    total += nums[i];
    // Шаг 5: Добавляем текущую сумму в результат
    arr.push(total);
  }
  
  // Шаг 6: Возвращаем массив накопленных сумм
  return arr;
};