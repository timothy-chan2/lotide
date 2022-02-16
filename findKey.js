const findKey = (obj, cb) => {
  let kee = undefined;

  for (let item in obj) {
    if (cb(obj[item])) {
      return item;
    }
  }
  return kee;
};

module.exports = findKey;