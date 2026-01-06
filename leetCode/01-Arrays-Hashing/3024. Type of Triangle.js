// 3024. Type of Triangle
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

var triangleType = function (nums) {
  const sizes = {};

  nums.forEach((num) => {
    if (sizes.hasOwnProperty(num)) {
      sizes[num] = num++;
    } else {
      sizes[num] = num;
    }
  });

  const resultSizes = [...Object.values(sizes)];

  switch (resultSizes.length) {
    case 3:
      return "scalene";

    case 2:
      return "isosceles";

    case 1:
      return "equilateral";
  }
};

// Что не так в текущем коде:
// Неправильная логика подсчета сторон - вы используете объект для подсчета, но логика инкремента неверна

// Не проверяется условие треугольника - сумма двух сторон должна быть больше третьей

// Неправильная обработка case - нужно 3 случая, но логика подсчета уникальных сторон ошибочна

// ============================================
// РЕШЕНИЕ:
// Сначала проверяем условие треугольника: сумма любых двух сторон должна быть больше третьей.
// Затем считаем количество уникальных сторон с помощью Set.
// 1 уникальная сторона = equilateral, 2 = isosceles, 3 = scalene.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - массив всегда размера 3
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var triangleType = function (nums) {
  // Шаг 1: Проверяем условие треугольника: сумма любых двух сторон должна быть больше третьей
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[0] + nums[2] <= nums[1] ||
    nums[1] + nums[2] <= nums[0]
  ) {
    // Шаг 2: Если условие не выполняется, треугольник нельзя образовать
    return "none";
  }

  // Шаг 3: Считаем количество уникальных сторон с помощью Set
  const uniqueSides = new Set(nums).size;

  // Шаг 4: Определяем тип треугольника по количеству уникальных сторон
  switch (uniqueSides) {
    case 1:
      return "equilateral"; // Все стороны равны
    case 2:
      return "isosceles"; // Две стороны равны
    case 3:
      return "scalene"; // Все стороны разные
    default:
      return "none";
  }
};
