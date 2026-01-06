// 2629. Function Composition
// Easy
// Companies
// Hint
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// ============================================
// РЕШЕНИЕ:
// Композиция функций означает применение функций справа налево.
// f(g(h(x))) означает: сначала h(x), затем g(h(x)), затем f(g(h(x))).
// Используем reduceRight для применения функций в обратном порядке.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - количество функций
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - не используем дополнительную память
// ============================================

var compose = function (functions) {
  // Шаг 1: Возвращаем функцию, которая принимает начальное значение x
  return function (x) {
    // Шаг 2: Применяем функции справа налево используя reduceRight
    // reduceRight проходит по массиву справа налево
    return functions.reduceRight((acc, currentValue) => {
      // Шаг 3: Применяем текущую функцию к аккумулятору
      return currentValue(acc);
    }, x);  // Шаг 4: Начальное значение - x
  };
};
