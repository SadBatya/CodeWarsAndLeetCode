// Объект счётчика
// Ограничение времени  1 с
// Ограничение памяти 64.0 Мб
// Реализуйте функцию createCounter(init), которая создаёт объект
// счётчика с методами для увеличения, уменьшения и сброса значения.

// Формат ввода
// Вы должны экспортировать функцию createCounter, которая принимает один аргумент:

// init — начальное значение счётчика (число).
// Формат вывода
// Функция должна вернуть объект со следующими методами:

// increment() — увеличивает значение счётчика на 1 и возвращает новое значение
// decrement() — уменьшает значение счётчика на 1 и возвращает новое значение
// reset() — сбрасывает значение счётчика до начального и возвращает его

// N1 - Первое решение, но не проходит один тест Яндекс контеста
export function createCounter(init) {
  const counter = {
    count: init,
    increment: function () {
      this.count++;
      return this.count;
    },
    decrement: function () {
      this.count--;
      return this.count;
    },
    reset: function () {
      this.count = init;
      return this.count;
    },
  };

  return counter;
}
// N2 - Решение проходит тесты в Яндекс контесте и на литкоде
export function createCounter(init) {
  let count = init;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
