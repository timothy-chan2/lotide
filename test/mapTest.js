const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// Test case 1: square roots
const numbers = [1, 4, 9];
assertArraysEqual(map(numbers, num => Math.sqrt(num)), [1, 2, 3]);

// Test case 2: find the double of all the numbers
assertArraysEqual(map(numbers, num => num * 2), [2, 8, 18]);

// Test case 3: Plural
const animal = ['horse', 'dog', 'sheep'];
assertArraysEqual(map(animal, elm => elm + 's'), ['horses', 'dogs', 'sheeps']);