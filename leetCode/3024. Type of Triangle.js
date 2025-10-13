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

// Второй вариант решения
var triangleType = function (nums) {
  // Сначала проверяем, можно ли вообще образовать треугольник
  // Для треугольника сумма любых двух сторон должна быть больше третьей
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[0] + nums[2] <= nums[1] ||
    nums[1] + nums[2] <= nums[0]
  ) {
    return "none";
  }

  // Считаем количество уникальных сторон
  const uniqueSides = new Set(nums).size;

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
