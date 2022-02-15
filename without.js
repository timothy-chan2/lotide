const assertArraysEqual = require('./assertArraysEqual');

// return a subset of a given array, removing unwanted elements
const without = (source, itemsToRemove) => {
  // Copy the array
  let arr = source.slice();

  // Remove from arr unwanted values
  for (let rmv of itemsToRemove) {
    for (let src in arr) {
      if ( rmv === arr[src]) {
        arr.splice(src, 1);
      }
    }
  }
  return arr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([true, "2", false], [false, "true", "3"]), [true, "2"]);

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;