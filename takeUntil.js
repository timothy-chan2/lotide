const assertArraysEqual = require('./assertArraysEqual');

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

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < -1);
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4, 5]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;