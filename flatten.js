// Flattens an array with up to one level of nesting
const flatten = (arr) => {
  const flattened = [];

  for (const data of arr) {
    if (Array.isArray(data)) {
      for ( const subData of data) {
        flattened.push(subData);
      }
    } else {
      flattened.push(data);
    }
  }
  return flattened;
}

module.exports = flatten;