// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна фиксированного размера k.
// Вычисляем сумму первого окна, затем сдвигаем окно, обновляя сумму
// (отнимаем уходящий элемент, прибавляем входящий). Находим максимальную сумму.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var findMaxAverage = function(nums, k) {
  // Шаг 1: Указатель на начало окна
  let begin = 0;
  // Шаг 2: Сумма элементов в текущем окне
  let window_state = 0;
  // Шаг 3: Максимальная сумма (изначально -Infinity)
  let result = -Infinity;

  // Шаг 4: Проходим по массиву
  for (let i = 0; i < nums.length; i++) {
    // Шаг 5: Добавляем текущий элемент к сумме окна
    window_state += nums[i];

    // Шаг 6: Когда окно достигло размера k
    if (i >= k - 1) {
      // Шаг 7: Обновляем максимальную сумму
      result = Math.max(result, window_state);
      // Шаг 8: Убираем элемент из начала окна
      window_state -= nums[begin];
      // Шаг 9: Сдвигаем начало окна вправо
      begin++;
    }
  }

  // Шаг 10: Возвращаем максимальное среднее (сумма / k)
  return result / k;
};

let nums = [1,12,-5,-6,50,5]
let k = 4

// вызываем функцию и передаем ей аргументы
maximumAverage(nums, k) 
console.log(maximumAverage(nums, k)) // 12.75

