// У нас есть набор билетов вида:

// [
//   { from: "London", to: "Moscow" },
//   { from: "NY", to: "London" },
//   { from: "Moscow", to: "SPB" },
// ];

// Из этих билетов можно построить единственный, неразумный маршрут
// Петель и повторов в маршруте нет

// Нужно написать программу, которая возвращает эти же объекты билетов
// в порядке следования по маршруту. Начало маршрута известно

function getRoute(tickets = [], start) {
  const ticketMap = new Map();

  for (const ticket of tickets) {
    ticketMap.set(ticket.from, ticket);
  }

  const route = [];
  let currentCity = start;

  while (ticketMap.has(currentCity)) {
    const ticket = ticketMap.get(currentCity);
    route.push(ticket);
    currentCity = ticket.to;
  }

  return route;
}

console.clear();
console.log(
  getRoute(
    [
      { from: "London", to: "Moscow" },
      { from: "NY", to: "London" },
      { from: "Moscow", to: "SPB" },
    ],
    "NY"
  )
);


// Вывод:
// Ваше решение оптимально по времени и памяти. Лучше чем O(n) сделать невозможно, так как нужно обработать каждый билет хотя бы один раз.

// Оценка: ✅ Отличное решение с оптимальной сложностью O(n)
