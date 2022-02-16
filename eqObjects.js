const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values
const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let item in obj1) {
      if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
        if (eqArrays(obj1[item], obj2[item]) === false) {
          return false;
        }
      } else {
        if (obj1[item] !== obj2[item]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqObjects;