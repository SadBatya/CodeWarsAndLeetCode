// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


function createPhoneNumber(numbers){
  return numbers.reduce((phoneMun, arr) => phoneMun.replace('x', arr), '(xxx) xxx-xxxx')
}

//второй способ

function createPhoneNumber2(numbers){
  numbers.splice(3, 0, ') ')
  numbers.splice(7, 0, '-')

  return '(' + numbers.join('')
}


console.log(createPhoneNumber(Arr))
console.log(createPhoneNumber2(Arr))