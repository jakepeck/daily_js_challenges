/*-----------------------------------------------------------------
Challenge: 19-flatten

Difficulty:  Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:
// function flatten(arr) {
//   // base case is i have no more nested arrays and I want to return my  array
//   let myArr = []
//   arr.forEach(element=> {
//     if (Array.isArray(element) === false){
//       myArr.push(element)
//       // base case
//     } else{
//       // recursive case want to merge my arrays and go deeper
//       myArr = myArr.concat(flatten(element))
//     }
//     return myArr;

// }
//   if (element.length > 0) {

//   } else {
//     myArr.push(flatten(element))
//   }
// )
// return myArr
// }

// flatten([1, [2, 3]])
// //=> [1, 2, 3]  (a new array)

// flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']])
// //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']