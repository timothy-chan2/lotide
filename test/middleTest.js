const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns an empty array when array has only 1 element", () => {
    const arr = [1];
    assert.deepEqual(middle(arr), []);
  });

  it("returns an empty array when array has 2 elements", () => {
    const arr = [1, 2];
    assert.deepEqual(middle(arr), []);
  });

  it("returns the middle 2 elements in an array when the array length is an even number", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(middle(arr), [2, 3]);
  });

  it("returns the middle element in an array when the array length is an odd number", () => {
    const arr = [1, 2, 3];
    assert.deepEqual(middle(arr), [2]);
  });
});