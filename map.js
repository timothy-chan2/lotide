const map = (arr, cb) => {
  const results = [];

  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};
/*
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);*/

// Needed to assert the tests
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

const assertArraysEqual = (arr1, arr2) => {
  // Display text element in array surounded by ""
  const displayArrayExactly = (array) => {
    let arr = '';

    for (let ind in array) {
      if (typeof array[ind] === 'string') {
        arr += `\"${array[ind]}\"`;
      } else {
        arr += `${array[ind]}`;
      }
      if (ind < array.length - 1) {
        arr += ', ';
      }
    }
    return arr;
  };

  // Print out assertion message
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: [${displayArrayExactly(arr1)}] === [${displayArrayExactly(arr2)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${displayArrayExactly(arr1)}] !== [${displayArrayExactly(arr2)}]`);
  }
};

// Test case 1: square roots
const numbers = [1, 4, 9];
assertArraysEqual(map(numbers, num => Math.sqrt(num)), [1, 2, 3]);

// Test case 2: find the double of all the numbers
assertArraysEqual(map(numbers, num => num * 2), [2, 8, 18]);

// Test case 3: Plural
const animal = ['horse', 'dog', 'sheep'];
assertArraysEqual(map(animal, elm => elm + 's'), ['horses', 'dogs', 'sheeps']);