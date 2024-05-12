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
  // let value = "0";
  //
  // if (n < 0) {
  //   value = "-";
  //   n *= -1;
  // }
  //
  // while (n != 0) {
  //   value += n % 10;
  //   n = parseInt(n / 10);
  // }
  //
  // return parseInt(value);

  let value = 0;
  const iteration = n < 0 ? n.toString().length - 1 : n.toString().length;

  for (let i = iteration - 1; i >= 0; i--) {
    const number = n % 10;
    n = parseInt(n / 10);
    value += 10 ** i * number;
  }

  return value;
}

module.exports = reverseInt;
