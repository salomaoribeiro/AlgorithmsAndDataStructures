// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // *** Solution 1 ***
  // let arr = [];
  // let subArr = [];
  //
  // for (let i = 0; i < array.length; i++) {
  //   subArr.push(array[i]);
  //
  //   if (subArr.length === size || i == array.length - 1) {
  //     arr.push(subArr);
  //     subArr = [];
  //   }
  // }
  //
  // return arr;

  // *** Solution 2 ***
  let arr = [];

  for (let i = 0; i <= array.length - 1; i += size) {
    arr.push(array.slice(i, i + size));
  }

  return arr;
}

module.exports = chunk;
