// Даны три секции с кодом. Необходимо написать результат выполнения
// каждого console.log()

// --------------------------

var n = 1;

function f(n) {
  n = 3;
}

f(n);

console.log(n); // 1

// --------------------------

var obj = { a: 1 };

function f1(o) {
  o.a = 5;
}

f1(obj);

console.log(obj); // {a: 5}

// -------------------------

var obj = { a: 1 };

function f2(o) {
  o = { hello: 1 };
}

f2(obj);

console.log(obj); // {a: 1}

// -------------------------

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw x;
  })
  .then((x) => console.log(x)) // 2
  .catch((err) => console.log(err))
  .then((x) => Promise.resolve(x)) // undefined
  .catch((err) => console.log(err))
  .then((x) => console.log(x)); // undefined

// -------------------------

var i = 10;
var array = [];

while (i--) {
  array.push(function () {
    return i + 1;
  });
}

console.log([array[0](), array[1]()]); //

// --------------------------
console.log("apple");

setTimeout(() => console.log("pear"), 0);

Promise.resolve("melone").then((res) => console.log(res));

new Promise((res, rej) => {
  console.log("orange");
  res("pineapple");
}).then((res) => console.log(res));

console.log("lime");

// apple, orange, lime, melone, pineapple, pear
