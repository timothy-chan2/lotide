const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < -1);
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4, 5]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);