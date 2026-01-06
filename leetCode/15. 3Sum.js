// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// ============================================
// РЕШЕНИЕ:
// Сортируем массив, затем для каждого элемента используем технику двух указателей
// для поиска пары, которая в сумме с текущим элементом дает 0.
// Пропускаем дубликаты для избежания повторяющихся троек.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n²) - сортировка O(n log n) + два вложенных цикла O(n²)
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) или O(n) в зависимости от реализации сортировки
// ============================================

const num1 = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
  // Шаг 1: Сортируем массив для использования техники двух указателей
  nums.sort((a, b) => a - b);
  // Шаг 2: Массив для хранения результата
  const result = [];

  // Шаг 3: Проходим по массиву, оставляя место для двух указателей
  for (let i = 0; i < nums.length - 2; i++) {
    // Шаг 4: Пропускаем дубликаты первого элемента
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Шаг 5: Инициализируем два указателя
    let left = i + 1;
    let right = nums.length - 1;

    // Шаг 6: Пока указатели не встретились
    while (left < right) {
      // Шаг 7: Вычисляем сумму трех элементов
      const sum = nums[i] + nums[left] + nums[right];

      // Шаг 8: Если сумма равна 0, нашли тройку
      if (sum === 0) {
        // Шаг 9: Добавляем тройку в результат
        result.push([nums[i], nums[left], nums[right]]);

        // Шаг 10: Пропускаем дубликаты для left
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Шаг 11: Пропускаем дубликаты для right
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Шаг 12: Двигаем оба указателя
        left++;
        right--;
      } else if (sum < 0) {
        // Шаг 13: Если сумма меньше 0, нужно увеличить её (двигаем left вправо)
        left++;
      } else {
        // Шаг 14: Если сумма больше 0, нужно уменьшить её (двигаем right влево)
        right--;
      }
    }
  }

  // Шаг 15: Возвращаем результат
  return result;
};

console.log(threeSum(num1));
