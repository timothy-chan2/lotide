const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

// Test case
const data1 = [1, 2, [3, 4], 5, [6]];
const results1 = flatten(data1);
assertArraysEqual(results1, [1, 2, 3, 4, 5, 6]);

const data2 = [[6], [5, 4], 3, [2, 1]];
const results2 = flatten(data2);
assertArraysEqual(results2, [6, 5, 4, 3, 2, 1]);