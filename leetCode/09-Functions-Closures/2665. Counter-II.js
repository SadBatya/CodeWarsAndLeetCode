// 2665. Counter II
// Easy
// Companies
// Hint
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:

// ============================================
// РЕШЕНИЕ:
// Используем замыкание для хранения текущего значения счетчика.
// Возвращаем объект с тремя методами: increment (увеличивает на 1),
// decrement (уменьшает на 1), reset (сбрасывает к начальному значению).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - каждая операция константная
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - храним только одну переменную
// ============================================

var createCounter = function (init) {
  // Шаг 1: Сохраняем начальное значение и текущее значение счетчика
  let num = init;
  
  // Шаг 2: Возвращаем объект с методами для управления счетчиком
  return {
    // Шаг 3: Метод для увеличения счетчика на 1
    increment: () => {
      return ++num;  // Префиксный инкремент: увеличиваем, затем возвращаем
    },
    // Шаг 4: Метод для уменьшения счетчика на 1
    decrement: () => {
      return --num;  // Префиксный декремент: уменьшаем, затем возвращаем
    },
    // Шаг 5: Метод для сброса счетчика к начальному значению
    reset: () => {
      return num = init;  // Присваиваем начальное значение и возвращаем
    },
  };
};
