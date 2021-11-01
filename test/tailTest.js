const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns length that is 1 less than the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns an array without element 0 of the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});