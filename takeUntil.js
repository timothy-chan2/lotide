// Function returns a slice of the array with elements taken from the beginning & should keep going until the callback returns a truthy value
const takeUntil = function(array, callback) {
  let part = [], i = 0;

  while (callback(array[i]) === false && i < array.length) {
    if (part) {
      part.push(array[i]);
    } else {
      part = [array[0]];
    }
    i++;
  }
  return part;
};

module.exports = takeUntil;