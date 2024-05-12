// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // *** Solution 1
  // const length = str.length;
  // let retorno = "";

  // for (let index = length - 1; index >= 0; index--) {
  //   retorno += str[index];
  // }
  // return retorno;

  // *** Solution 2
  return str.split("").reverse().join("");
}

module.exports = reverse;
