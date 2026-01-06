// 209. Minimum Size Subarray Sum
// Medium
// Topics
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна (sliding window). Расширяем окно справа,
// пока сумма не достигнет target, затем сжимаем слева, обновляя минимальную длину.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - каждый элемент посещается максимум дважды
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var minSubArrayLen = function (target, nums) {
  // Шаг 1: Инициализируем минимальную длину как бесконечность
  let minLength = Infinity;
  // Шаг 2: Указатель на начало окна
  let start = 0;
  // Шаг 3: Текущая сумма элементов в окне
  let currentSum = 0;

  // Шаг 4: Проходим по массиву, расширяя окно справа
  for (let i = 0; i < nums.length; i++) {
    // Шаг 5: Добавляем текущий элемент к сумме
    currentSum += nums[i];

    // Шаг 6: Пока сумма >= target, сжимаем окно слева
    while (currentSum >= target) {
      // Шаг 7: Обновляем минимальную длину
      minLength = Math.min(minLength, i - start + 1);
      // Шаг 8: Убираем элемент из начала окна
      currentSum -= nums[start];
      // Шаг 9: Сдвигаем начало окна вправо
      start++;
    }
  }

  // Шаг 10: Если подмассив не найден, возвращаем 0
  return minLength === Infinity ? 0 : minLength;
};

// Примеры вызова функции
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
