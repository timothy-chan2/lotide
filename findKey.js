const assertEqual = require('./assertEqual');

const findKey = (obj, cb) => {
  let kee = undefined;

  for (let item in obj) {
    if (cb(obj[item])) {
      return item;
    }
  }
  return kee;
};

// Test case 1
const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 20);

assertEqual(test1, undefined);

// Test case 2
const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

assertEqual(test2, "Akaleri");