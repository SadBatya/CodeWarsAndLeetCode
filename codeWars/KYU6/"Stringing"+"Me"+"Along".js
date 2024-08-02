// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

// Good luck and happy coding!

function createMessage(str) {
  return function(next){
    if (next === undefined) {return str;}
    return createMessage(str + " "+ next);
  }
}


//второй способ решения :D

