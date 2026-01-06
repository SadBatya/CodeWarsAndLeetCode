// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Начинаем с краев массива и двигаем указатель
// с меньшей высотой внутрь. Площадь = ширина * min(высота[left], высота[right]).
// Двигаем меньший указатель, так как только это может увеличить площадь.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

export const maxArea = (height) => {
  // Шаг 1: Инициализируем два указателя: слева и справа
  let left = 0;
  let right = height.length - 1;
  // Шаг 2: Максимальная площадь (изначально 0)
  let result = 0;

  // Шаг 3: Продолжаем пока указатели не встретятся
  while (left < right) {
    // Шаг 4: Вычисляем площадь текущего контейнера
    // Площадь = ширина * минимальная высота
    let area = (right - left) * Math.min(height[left], height[right]);

    // Шаг 5: Обновляем максимальную площадь
    result = Math.max(result, area);

    // Шаг 6: Двигаем указатель с меньшей высотой
    if (height[left] < height[right]) {
      // Шаг 7: Если левая высота меньше, двигаем left вправо
      left++;
    } else {
      // Шаг 8: Иначе двигаем right влево
      right--;
    }
  }

  // Шаг 9: Возвращаем максимальную площадь
  return result;
};
