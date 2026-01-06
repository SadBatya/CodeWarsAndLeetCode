// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:

// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

// ============================================
// РЕШЕНИЕ:
// Вычисляем общую сумму массива. Если она не делится на 3, возвращаем false.
// Иначе ищем две точки раздела, где накопленная сумма равна targetSum (total/3).
// Нужно найти ровно 2 такие точки (тогда массив разделится на 3 части).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var canThreePartsEqualSum = function (arr) {
  // Шаг 1: Вычисляем общую сумму массива
  let total = arr.reduce((prevCurrent, current) => prevCurrent + current, 0);

  // Шаг 2: Если сумма не делится на 3, нельзя разделить на 3 равные части
  if (total % 3 !== 0) {
    return false;
  }

  // Шаг 3: Целевая сумма для каждой части
  let targetSum = total / 3;
  // Шаг 4: Счетчик найденных разделов (нужно найти 2)
  let partitionCount = 0;
  // Шаг 5: Текущая накопленная сумма
  let currentSum = 0;

  // Шаг 6: Проходим по массиву
  for (let i = 0; i < arr.length; i++) {
    // Шаг 7: Добавляем текущий элемент к сумме
    currentSum += arr[i];
    
    // Шаг 8: Если накопленная сумма равна целевой, нашли раздел
    if (currentSum === targetSum) {
      partitionCount++;
      // Шаг 9: Сбрасываем сумму для следующей части
      currentSum = 0;
    }
  }

  // Шаг 10: Если нашли 2 раздела, массив можно разделить на 3 равные части
  return partitionCount >= 2;
};
const arr1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr1)); // Ожидаемый результат: true