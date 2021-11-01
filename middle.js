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

module.exports = middle;