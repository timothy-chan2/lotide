const assertEqual = require('./assertEqual');

// Function takes in an object and a value & scan the object and return the first key which contains the given value
const findKeyByValue = (obj, val) => {
let kee = undefined;

  for (let item in obj) {
    if (obj[item] === val) {
      kee = item;
    }
  }
  return kee;
};

// Test code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, 50), undefined);

module.exports = findKeyByValue;