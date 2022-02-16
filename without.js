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

module.exports = without;