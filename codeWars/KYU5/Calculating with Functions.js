function executeValue(callback, value) {
  return typeof callback === "function" ? callback(value) : value;
}

function zero(callback) {
  return executeValue(callback, 0);
}
function one(callback) {
  return executeValue(callback, 1);
}
function two(callback) {
  return executeValue(callback, 2);
}
function three(callback) {
  return executeValue(callback, 3);
}
function four(callback) {
  return executeValue(callback, 4);
}
function five(callback) {
  return executeValue(callback, 5);
}
function six(callback) {
  return executeValue(callback, 6);
}
function seven(callback) {
  return executeValue(callback, 7);
}
function eight(callback) {
  return executeValue(callback, 8);
}

function nine(callback) {
  return executeValue(callback, 9);
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}

function minus(a) {
  return function(b){
    return b - a
  }
}
function times(a) {
  return function(b){
    return a * b
  }
}
function dividedBy(a) {
  return function(b){
    return Math.floor(b / a)
  }
}



// второй способ решения 
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b