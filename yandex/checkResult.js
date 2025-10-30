/**
 * Необходимо проверить решение задачи по двум сервисам, вызвав checkResult(url1, solution), checjresult(url2, solution)
 * checkResult: (url: string, solution: string | number) => Promise<boolean>
 * Если оба запроса вернули true - вывести true
 * Если хоть один вернул false - вывести false
 * Если хоть один не ответил - вывести error
 * Если хоть один отвечает долшке 1 сек - всывести timeout
 */

import { checkResult } from "myLib";

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

// Функция проверки двух сервисов
const checkServices = async (promiseArr) => {
  // ⏰ Обёртка для контроля таймаута (1 секунда)
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("timeout"), 1000)
  );

  try {
    // Promise.race: кто быстрее — таймаут или наши проверки
    const results = await Promise.race([
      Promise.allSettled(promiseArr), // ждём оба промиса
      timeoutPromise, // или таймаут
    ]);

    // Если results — это строка 'timeout', значит сработал таймер
    if (results === "timeout") {
      console.log("timeout");
      return;
    }

    // Проверяем, не было ли ошибок
    if (results.some((r) => r.status === "rejected")) {
      console.log("error");
      return;
    }

    // Извлекаем значения (true/false)
    const values = results.map((r) => r.value);

    // Если хотя бы одно false → false
    if (values.includes(false)) {
      console.log("false");
      return;
    }

    // Если оба true → true
    console.log("true");
  } catch (e) {
    // На случай непредвиденных ошибок
    console.log("error");
  }
};

// 🔥 Запуск
checkServices([checkResult(url1, solution), checkResult(url2, solution)]);

checkResult(url1, solution);
checkResult(url2, solution);
