// In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

// garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25

// felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20
// But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

// felix.weight = 25;
// felix.weight // 25
// Cat.averageWeight(); // now 25
// Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

var Cat = (function () {
  const cats = []

  const constructor = function (name, weight) {
    if (!name || !weight) throw Error('invalid parameters')
    Object.defineProperty(this, 'name', { get: () => name })
    Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
    cats.push(this)
  }

  constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length

  return constructor
 }());

 // второй способ решения

 const Cat = (function() {
  // Приватные переменные
  let totalWeight = 0;
  let count = 0;

  // Конструктор
  function Cat(name, weight) {
    this.name = name;
    this.weight = weight;

    // Обновляем общую массу и количество
    totalWeight += weight;
    count += 1;
  }

  // Метод для вычисления средней массы
  Cat.averageWeight = function() {
    return count === 0 ? 0 : totalWeight / count;
  };

  // Возвращаем конструктор
  return Cat;
})();
