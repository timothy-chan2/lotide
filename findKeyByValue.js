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

module.exports = findKeyByValue;