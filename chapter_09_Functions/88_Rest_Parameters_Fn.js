/*Rest Parameters (...) in JavaScript allow a function to accept
 any number of arguments as an array.*/

//  Basic Syntax
function functionName (...args) {
  //args as an Array
}

function showNumbers (...nums) {
  console.log(nums)
}

showNumbers(1, 2, 3, 4, 5, 6)

//Sum of Numbers
function sum (...num) {
  let total = 0
  for (let n of num) {
    total += n
  }
  return total
}
console.log(sum(1, 2, 3, 4, 5, 6))
