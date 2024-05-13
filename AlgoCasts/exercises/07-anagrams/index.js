// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let dictA = quantityForLetters(justLetters(stringA));
  let dictB = quantityForLetters(justLetters(stringB));

  return Object.entries(dictA).toString() === Object.entries(dictB).toString();
}

function justLetters(string) {
  let arr = [];

  string
    .toLocaleLowerCase()
    .split("")
    .sort()
    .forEach((element) => {
      const ascii = element.charCodeAt(0);
      if (ascii >= 97 && ascii <= 122) arr.push(element);
    });

  return arr;
}

function quantityForLetters(array) {
  let dictionary = {};

  array.forEach((element) => {
    dictionary[element] = dictionary[element] + 1 || 1;
  });

  return dictionary;
}

module.exports = anagrams;
