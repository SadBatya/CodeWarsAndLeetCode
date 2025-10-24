// Ограничение времени 1 с
// Ограничение памяти 64.0 Мб
// Напишите функцию fetchWithAutoRetry(fetcher, count), которая делает запрос с 
// помощью переданной функции fetcher и автоматически повторяет его в случае ошибки.

// Формат ввода
// Вы должны экспортировать асинхронную функцию fetchWithAutoRetry, которая принимает на вход два аргумента:

// fetcher — асинхронная функция, которую нужно использовать для выполнения запроса;
// count — количество дополнительных запросов, которое нужно сделать, если fetcher вернёт ошибку.
// Требования:

// Если все запросы завершились ошибкой, необходимо выбросить последнюю ошибку, в противном случае — первое успешное значение.
// Запросы должны выполняться последовательно, запуск нескольких параллельных запросов запрещён.
// Нельзя вызывать fetcher больше, чем 
// count + 1
// count+1 раз.
// Нельзя вызывать fetcher, если уже был получен успешный ответ.
// Формат вывода
// Функция должна возвращать Promise, который:

// или разрешается с результатом первого успешного вызова fetcher,
// или выбрасывает последнюю полученную ошибку, если все попытки завершились неудачей.

export async function fetchWithAutoRetry(fetcher, count) {
  let lastError;

  for (let i = 0; i <= count; i++) {
    try {
      const result = await fetcher();

      return result;
    } catch (err) {

      lastError = err;
      
      if (i === count) throw lastError;
    }
  }
};


// Вывод 1
// const fetcher = createFetcherMock([
//   {'error': '504 Gateway Timeout'},
//   {'error': '503 Service Unavailable'},
//   {'error': '502 Bad Gateway'},
//   {'error': '500 Internal Server Error'},
//   {'data': 'Hello, world!'},
//   {'data': 'Yandex'}
// ]);

// fetchWithAutoRetry(fetcher, 5)
//   .then((data) => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error));

// Success: Hello, world!