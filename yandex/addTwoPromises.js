// Сложение промисов
// Ограничение времени 1 с
// Ограничение памяти 64.0 Мб
// Реализуйте функцию addTwoPromises, которая принимает на вход два объекта Promise
// с типом number и возвращает Promise с их суммой.

// Формат ввода
// Функция addTwoPromises принимает два аргумента:

// promise1: Promise<number> — первый Promise, который разрешается в число
// promise2: Promise<number> — второй Promise, который разрешается в число
// Оба аргумента являются объектами Promise, которые должны разрешаться (resolve) или отклоняться (reject) с числовыми значениями.

// Формат вывода
// Функция возвращает Promise<number>, который разрешается в сумму значений двух входных Promise. Если Promise отклоняется, его значение все равно используется в сумме.

export const addTwoPromises = async function (promise1, promise2) {
  const [num1, num2] = await Promise.all([
    promise1.catch((num) => num),
    promise2.catch((num) => num),
  ]);

  return num1 + num2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
addTwoPromises(Promise.reject(3), Promise.resolve(2)).then(console.log);
