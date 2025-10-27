// Реализовать функция sumPromises, которая принимает
// в качестве аргументов промисы и возвращает
// сумму результатов их выполнения
// Функция может принимать любое количество аргументов
// Можно использовать любые API промисов

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

async function sumPromises(...promises) {
  return Promise.all(promises).then((values) => {
    return values.reduce((acc, val) => acc + val, 0);
  });
}

sumPromises(promise1, promise2).then(console.log);
