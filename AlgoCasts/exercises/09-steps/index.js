// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// *** Solution 1 ***
function steps(n) {
  for (let i = 1; i <= n; i++) {
    result = "";

    for (let j = 1; j <= n; j++) {
      result += j <= i ? "#" : " ";
    }
    console.log(result);
  }
}

// *** Solution 2 ***
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i) + " ".repeat(n - i));
//   }
// }

module.exports = steps;
