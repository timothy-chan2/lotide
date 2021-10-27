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

// Function that take in an array and return the middle-most element(s) of the given array
const middle = (arr) => {
  let len = arr.length, mid;

  if (len === 1 || len === 2) {
    mid = [];
  } else if (len % 2 === 0) {
    mid = [arr[(len / 2) - 1], arr[len / 2]];
  } else {
    mid = [arr[Math.floor(len / 2)]];
  }
  return mid;
};

// Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, "2", 3, 4]), ["2", 3]);