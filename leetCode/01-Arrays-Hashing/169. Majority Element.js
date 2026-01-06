// 169. Majority Element
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// ============================================
// РЕШЕНИЕ:
// Используем алгоритм Бойера-Мура для поиска большинства.
// Идея: если элемент встречается больше n/2 раз, то даже если мы "отменяем"
// его вхождения другими элементами, он все равно останется в конце.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var majorityElement = function (nums) {
  // Шаг 1: Проверяем, что массив не пустой
  if (nums.length === 0) return 0;

  // Шаг 2: Счетчик для текущего кандидата
  let count = 0;
  // Шаг 3: Кандидат на элемент большинства
  let majorNum = 0;

  // Шаг 4: Первый проход - находим кандидата
  for (let i = 0; i < nums.length; i++) {
    // Шаг 5: Если счетчик равен 0, выбираем новый кандидат
    if (!count) {
      majorNum = nums[i];
      count = 1;
    } else {
      // Шаг 6: Если текущий элемент равен кандидату, увеличиваем счетчик
      // Иначе уменьшаем (отменяем одно вхождение)
      count += (nums[i] === majorNum ? 1 : -1)
    }
  }
  
  // Шаг 7: Возвращаем кандидата (по условию он всегда существует)
  return majorNum;
};

majorityElement(nums);
majorityElement(nums2);
