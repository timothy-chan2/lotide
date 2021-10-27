// Output all the indices where each individual letter appears in the string
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i in sentence) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(Number(i));
      } else {
        results[sentence[i]] = [Number(i)];
      }
    }
  }

  return results;
};

// Test case
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

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);

assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house').n, [12]);
