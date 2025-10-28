const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function isPangram(text) {
  const cleanStr = text.toUpperCase().replace(/[^A-Z]/g, "");

  return cleanStr.split("").every((char) => LETTERS.includes(char));
}

console.log(
  isPangram(
    "A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once"
  )
); // false
console.log(isPangram("Waltz, bad nymph, for quick jigs vex")); // true
