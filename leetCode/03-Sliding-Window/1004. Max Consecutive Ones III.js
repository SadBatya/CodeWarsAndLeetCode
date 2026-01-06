// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна. Подсчитываем количество нулей в окне.
// Если нулей больше k, сжимаем окно слева. Обновляем максимальную длину окна.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - каждый элемент посещается максимум дважды
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var longestOnes = function (nums, k) {
  // Шаг 1: Указатель на начало окна
  let begin = 0;
  // Шаг 2: Количество нулей в текущем окне
  let window_state = 0;
  // Шаг 3: Максимальная длина окна
  let result = -Infinity;

  // Шаг 4: Проходим по массиву, расширяя окно справа
  for (let i = 0; i < nums.length; i++) {
    // Шаг 5: Если текущий элемент - ноль, увеличиваем счетчик нулей
    if (nums[i] === 0) {
      window_state++;
    }
    
    // Шаг 6: Пока количество нулей превышает k, сжимаем окно слева
    while (window_state > k) {
      // Шаг 7: Если элемент в начале окна - ноль, уменьшаем счетчик
      if (nums[begin] === 0) {
        window_state--;
      }
      // Шаг 8: Сдвигаем начало окна вправо
      begin++;
    }

    // Шаг 9: Обновляем максимальную длину окна
    result = Math.max(result, i - begin + 1);
  }

  // Шаг 10: Возвращаем максимальную длину
  return result;
};
