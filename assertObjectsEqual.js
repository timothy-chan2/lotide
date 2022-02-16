const eqObjects = require('./eqObjects');

// Assert if 2 objects are the same
const assertObjectsEqual = function(actual, expected) {
  // Use to show content of objects
  const inspect = require('util').inspect;

  // Print out assertion message
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(expected)} === ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(expected)} !== ${inspect(actual)}`);
  }
};

module.exports = assertObjectsEqual;