const assertObjectsEqual = require('../assertObjectsEqual');

// Test case
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // <= true
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // <= false
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // <= true
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // <= false