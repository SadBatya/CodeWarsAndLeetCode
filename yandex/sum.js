/**
 * Требуется реализовать функцию spy которая умеет шпионить за другой функцией.
 */

function _sum(a, b) {
  return a + b;
}

function spy(f) {
  function spiedFunction(...args) {
    spiedFunction.data.calls++;
    spiedFunction.data.args.push(args);
    return f.apply(this, args);
  }

  spiedFunction.data = {
    calls: 0,
    args: [],
  };

  return spiedFunction;
}

const sum = spy(_sum);

console.log(sum(1, 2)); // 4
console.log(sum(21, 21)); // 22

console.log(sum.data.calls); // 2
console.log(sum.data.args); // [[2, 21], [21, 21]]
