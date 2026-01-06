// Medium
// Topics
// premium lock icon
// Companies
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Так как массив отсортирован, можем использовать
// это преимущество: если сумма больше target, уменьшаем right, иначе увеличиваем left.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var twoSum = (numbers, target) => {
  // Шаг 1: Инициализируем два указателя: слева и справа
  let left = 0;
  let right = numbers.length - 1;

  // Шаг 2: Продолжаем пока указатели не встретятся
  while (left < right) {
    // Шаг 3: Вычисляем текущую сумму
    let currentSum = numbers[left] + numbers[right];

    // Шаг 4: Если сумма равна target, нашли пару
    if (currentSum === target) {
      // Шаг 5: Возвращаем индексы (1-indexed, поэтому +1)
      return [left + 1, right + 1];
    }

    // Шаг 6: Если сумма больше target, нужно уменьшить её
    if (currentSum > target) {
      // Шаг 7: Уменьшаем right (берем меньшее число)
      right--;
    } else {
      // Шаг 8: Если сумма меньше target, увеличиваем left (берем большее число)
      left++;
    }
  }

  // Шаг 9: Если пара не найдена (не должно произойти по условию)
  return [];
};

console.log(twoSum(num1, targ));
