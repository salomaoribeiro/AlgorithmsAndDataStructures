// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let dict = {};

  for (let char of str) {
    dict[char] = dict[char] ? dict[char] + 1 : 1;
  }

  const value = Math.max(...Object.values(dict));

  return Object.keys(dict).find((key) => dict[key] === value);
}

module.exports = maxChar;
