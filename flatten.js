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


const flatten = (arr) => {
  const flattened = [];

  for (data of arr) {
    if (Array.isArray(data)) {
      for (subData of data) {
        flattened.push(subData);
      }
    } else {
      flattened.push(data);
    }
  }
  return flattened;
}

// Test case
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([[6], [5, 4], 3, [2, 1]]); // => [6, 5, 4, 3, 2, 1]

const data1 = [1, 2, [3, 4], 5, [6]];
const results1 = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(results1, [1, 2, 3, 4, 5, 6]);