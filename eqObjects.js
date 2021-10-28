const eqArrays = (arr1, arr2) => {
  let match = true;

  // Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check elements in the same position in each array are equal
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      match = false;
    }
  }
  return match;
};

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

// Test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);