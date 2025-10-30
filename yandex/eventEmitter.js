/**
 * type Payload = any
 * type RemoveEventListener = () => void
 * type EventListener = (payload?: Payload) => void | Promise<void>
 * interface IEventEmitter {
 *  Подписывает слушатель к событию event
 *  Возвращает функцию, вызов которой отписывает слушатель от события event
 * addEventListener(event: string, listener: EventListener): RemoveEventListener;
 *  Вызывает всех слушателей, привязанных к событию event
 *  При вызове слушателя дополнительным аргументом может быть передан payload (произвольные dispatchEvent(event: string, payload?: Payload: void))
 * }
 */

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addEventListener(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (l) => l !== listener
      );
    };
  }

  dispatchEvent(event, payload) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        listener(payload);
      });
    }
  }
}

// Создаем инстанс EventEmitter
const button = new EventEmitter();

// Подписываем слушателя к событиям 'click'
const removeHandleClick1 = button.addEventListener("click", () => {
  console.log("click");
});
const removeHandleClick2 = button.addEventListener("click", () => {
  console.log("click");
});

// Подлписываем слушатель к событию 'hover'
const removeHandlerHover = button.addEventListener("hover", (payload) =>
  console.timeLog("hover")
);

// Оповещаем всех слушателей о наступлении события 'click'
button.dispatchEvent("click");

// Оповещаем всех слушателей о наступлении события 'hover'
button.dispatchEvent("hover");

// Отписываем все слушатели
removeHandleClick1();
removeHandleClick2();
removeHandlerHover();

// Пытыаемся снова оповестить всех слушателей о наступлении события 'click' И 'hover'
button.dispatchEvent("click");
button.dispatchEvent("hover");
