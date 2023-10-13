function reverseMessage(str) {
  return str.toLowerCase().split('').reverse().join('')
            .replace(/(^|\s+)[a-z]/g, c => c.toUpperCase());
}

console.log(reverseMessage('Vladimir on the street'))