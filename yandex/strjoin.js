/**
 * Необходимо написать функцию strjoin, которая склеивает строки через раздлитель
 */

const strJoin = (separator, ...str) => {
  return str.join(separator);
};

console.log(strJoin("-", "a", "b", "c"));
console.log(strJoin("-", "a", "b", "c", "d"));
console.log(strJoin("-", "a", "b", "c", "d", "e"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f"));
console.log(strJoin("-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g"));
