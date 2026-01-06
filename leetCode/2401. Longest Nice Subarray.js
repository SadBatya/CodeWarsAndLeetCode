// 2401. Longest Nice Subarray
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array nums consisting of positive integers.

// We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

// Return the length of the longest nice subarray.

// A subarray is a contiguous part of an array.

// Note that subarrays of length 1 are always considered nice.

// Example 1:

// Input: nums = [1,3,8,48,10]
// Output: 3
// Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
// - 3 AND 8 = 0.
// - 3 AND 48 = 0.
// - 8 AND 48 = 0.
// It can be proven that no longer nice subarray can be obtained, so we return 3.
// Example 2:

// Input: nums = [3,1,5,11,13]
// Output: 1
// Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна с битовой маской. Подмассив "nice",
// если побитовое AND любой пары элементов равно 0 (нет общих битов).
// Используем маску для отслеживания занятых битов. Если новый элемент
// конфликтует с маской, сжимаем окно слева.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - каждый элемент посещается максимум дважды
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var longestNiceSubarray = function (nums) {
  // Шаг 1: Левая граница скользящего окна
  let left = 0;

  // Шаг 2: Битовая маска текущего окна (хранит все биты, которые уже "заняты")
  let mask = 0;

  // Шаг 3: Максимальная длина хорошего подмассива
  let result = 0;

  // Шаг 4: Двигаем правую границу окна
  for (let right = 0; right < nums.length; right++) {
    // Шаг 5: Пока добавление nums[right] создаёт конфликт битов
    // (есть хотя бы один общий бит между mask и nums[right])
    while ((mask & nums[right]) !== 0) {
      // Шаг 6: Убираем число nums[left] из окна используя XOR
      // XOR безопасен, потому что по условию каждый бит в окне встречается не более одного раза
      mask ^= nums[left];
      // Шаг 7: Сдвигаем левую границу окна
      left++;
    }

    // Шаг 8: Добавляем nums[right] в окно, объединяя его биты с текущей маской
    mask |= nums[right];

    // Шаг 9: Обновляем максимальную длину валидного окна
    result = Math.max(result, right - left + 1);
  }

  // Шаг 10: Возвращаем длину самого длинного хорошего подмассива
  return result;
};
