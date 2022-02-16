# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @timothy-chan2/lotide`

**Require it:**

`const _ = require('@timothy-chan2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element in an array

* `tail(array)`: Returns the original array without the first element

* `middle(arr)`: Returns the middle-most element(s) of the given array

*  `countLetters(sentence)` : Returns an object showing the number of times each letter appears

*  `countOnly(allItems, itemsToCount)` : Returns an object showing the number of times each element in an array appears but only for those elements that have a value of `true` in the `itemsToCount` object

*  `findKey(obj, cb)` : Returns the first key of an object with value properties as an object that meets the condition of the callback function `cb`

*  `findKeyByValue(obj, val)` : Returns the first key in an object which contains the given value

*  `letterPositions(sentence)` : Returns an object with all the indices where each individual letter appears in the string

*  `map(arr, cb)` : Returns a new array after performing the calculations in the callback function `cb` on each element

*  `takeUntil(array, callback)` : Returns a slice of the array with elements taken from the beginning until the callback returns a truthy value

*  `without(source, itemsToRemove)` : Returns a subset of a given array, removing unwanted elements

* `flatten(arr)`: Returns a "flattened" version of an array with up to one level of nesting