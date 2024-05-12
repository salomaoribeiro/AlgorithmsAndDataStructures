// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let value = "0";

  if (n < 0) {
    value = "-";
    n *= -1;
  }

  while (n != 0) {
    value += n % 10;
    n = parseInt(n / 10);
  }

  return parseInt(value);
}

module.exports = reverseInt;
