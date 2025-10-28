// Функция, которая возвращает первый успешно завершённый промис
function any(promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0; // Считаем, сколько промисов отклонилось
    const errors = []; // Массив для хранения ошибок

    // Перебираем все переданные промисы
    promises.forEach((promise, index) => {
      // Оборачиваем каждый в Promise.resolve — чтобы обрабатывать и значения, и промисы
      Promise.resolve(promise)
        .then((value) => {
          // ✅ Если промис успешно выполнился — сразу возвращаем результат
          resolve(value);
        })
        .catch((err) => {
          // ❌ Если промис отклонён — запоминаем ошибку
          errors[index] = err;
          rejectedCount++;

          // Если все промисы отклонены — возвращаем общую ошибку
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// Пример использования:
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("3");

// 💡 Ожидается: выведет "3", т.к. это первый успешно завершённый промис
any([p1, p2, p3]).then((result) => console.log("✅ Результат:", result));
