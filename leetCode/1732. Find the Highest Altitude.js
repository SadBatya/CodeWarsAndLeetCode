// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// ============================================
// РЕШЕНИЕ:
// Начинаем с высоты 0. Проходим по массиву gain, накапливая высоту.
// Отслеживаем максимальную достигнутую высоту.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var largestAltitude = function(gain) {
  // Шаг 1: Текущая высота (начинаем с 0)
  let currentAltitude = 0;
  // Шаг 2: Максимальная высота
  let maxAltitude = 0;

  // Шаг 3: Проходим по массиву изменений высоты
  for (let i = 0; i < gain.length; i++) {
    // Шаг 4: Обновляем текущую высоту
    currentAltitude += gain[i];
    // Шаг 5: Обновляем максимальную высоту
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  // Шаг 6: Возвращаем максимальную высоту
  return maxAltitude;
};

