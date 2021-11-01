const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns an object showing the property value as how many times each letter in the string appears", () => {
    const words = 'lighthouse in the house';
    assert.deepEqual(countLetters(words), { 'l': 1, 'i': 2, 'g': 1, 'h': 4, 't': 2, 'o': 2, 'u': 2, 's': 2, 'e': 3, 'n':1 });
  });
});