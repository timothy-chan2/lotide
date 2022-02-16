const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// Test case
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);

assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house').n, [12]);