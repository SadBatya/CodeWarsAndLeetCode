// Функция asyncAuth принимает callback, в который может быть передана ошибка (первым аргументом) и данные с бэкенда (вторым аргументом). asyncAuth((error, data) => {})
// Вам нужно реализовать функцию auth(),
// Которая вызывает asyncAuth и возвращает Promise

function auth() {
  // asyncAuth((error, data) => {})

  return new Promise((resolve, reject) => {
    asyncAuth((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Функция tryAuth() использует auth() и в с
// лучае ошибки сверашет N дополнительных попыток
// В случае если все попытки провалились - вернуть последнюю ошибку

function tryAuth(n) {
  return auth().catch((error) => {
    if (n === 0) {
      return Promise.reject(error);
    }
    return tryAuth(n - 1);
  });
}
