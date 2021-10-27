const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const results = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// Test case
const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

const result2 = countLetters("lighthouse in the house");

assertEqual(result2['l'], 1);
assertEqual(result2['i'], 2);
assertEqual(result2['g'], 1);
assertEqual(result2['h'], 4);
assertEqual(result2['t'], 2);
assertEqual(result2['o'], 2);
assertEqual(result2['u'], 2);
assertEqual(result2['s'], 2);
assertEqual(result2['e'], 3);
assertEqual(result2['n'], 1);
assertEqual(result2[' '], undefined);