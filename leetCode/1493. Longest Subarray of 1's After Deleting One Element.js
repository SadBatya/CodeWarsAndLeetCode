// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна с разрешением на один ноль (k=1).
// Находим максимальную длину подмассива с максимум одним нулем, затем
// вычитаем 1, так как нужно удалить один элемент.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - каждый элемент посещается максимум дважды
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var longestSubarray = function (nums) {
  // Шаг 1: Разрешенное количество нулей в окне (1, так как можем удалить один элемент)
  let k = 1;
  // Шаг 2: Указатель на начало окна
  let begin = 0;
  // Шаг 3: Количество нулей в текущем окне
  let window_state = 0;
  // Шаг 4: Максимальная длина окна
  let result = 0;

  // Шаг 5: Проходим по массиву, расширяя окно справа
  for (let i = 0; i < nums.length; i++) {
    // Шаг 6: Если текущий элемент - ноль, увеличиваем счетчик
    if (nums[i] === 0) {
      window_state++;
    }

    // Шаг 7: Пока количество нулей превышает k, сжимаем окно слева
    while (window_state > k) {
      // Шаг 8: Если элемент в начале окна - ноль, уменьшаем счетчик
      if (nums[begin] === 0) {
        window_state--;
      }
      // Шаг 9: Сдвигаем начало окна вправо
      begin++;
    }

    // Шаг 10: Обновляем максимальную длину окна
    result = Math.max(result, i - begin + 1);
  }

  // Шаг 11: Вычитаем 1, так как нужно удалить один элемент
  return result - 1;
};
