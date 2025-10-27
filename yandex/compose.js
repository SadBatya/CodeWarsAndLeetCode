// Реализовать функцию compose, которая
// принимает переменное количество функции и возвращает новую фукнцию
// Результат работы каждоый функции передается в следующую

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;


function compose(...fns) {
  return function(...args) {
    let result = fns[fns.length - 1](...args);
    
    for (let i = fns.length - 2; i >= 0; i--) {
      result = fns[i](result);
    }
    
    return result;
  };
}

console.clear();
console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));



const calc = compose(square, times2, sum);
calc(3, 4);
calc(5, 6);
