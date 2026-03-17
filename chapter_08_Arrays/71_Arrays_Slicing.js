/*slicing and combining
slice() returns a new array containing selected elements.
It does not change the original array.*/

let arr = [1, 2, 3, 4, 5]

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
console.log(arr.slice(1)) //[ 2, 3, 4, 5 ]Don't give the end, it will automatically take from start to end.
console.log(arr.slice(1, 2))
console.log(arr.slice(1, 3))

let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes']

let result = fruits.slice(1, 4)

console.log(result) //[ 'banana', 'mango', 'orange' ]

// Slice from Index to End
let numbers = [10, 20, 30, 40, 50]
let part = numbers.slice(2)
console.log(part) //[ 30, 40, 50 ]

console.log(numbers.slice(-2)) //[ 40, 50 ]start from the -1 and till -2.

// Negative Index ==> Negative values start counting from the end.

let colors = ['red', 'blue', 'green', 'orange', 'yellow']

let end = colors.slice(-2) // it will fetch two values from end[ 'orange', 'yellow' ]
console.log(end)

let endlast3 = colors.slice(-3) // it will fetch two values from end[ 'orange', 'yellow' ]
console.log(endlast3) //[ 'green', 'orange', 'yellow']

//Array Concat
let arr1 = [1, 2, 3, 4]
let a = [1, 2]
let b = [3, 4]
let c = a.concat(b)
console.log(c)
let c1 = a.concat(b, [5, 6])[1, 2, 3, 4]
console.log(c1) //[ 1, 2, 3, 4, 5, 6 ]

// spread (modern way) - concatenation. (...)spread operator ...
// in JavaScript is a modern way to expand or combine arrays, objects, or iterable values.
//  It is commonly used for concatenation, copying, and inserting elements.

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const spreadconcat = [...array1, ...array2]

console.log(spreadconcat) // [1, 2, 3, 4, 5, 6]

//Spread Operator for copying an array--create a shallow copy
const num=[1,2,3,4,5]
const num1=[...num,9,10];//[ 1, 2,  3, 4,5, 9, 10]
console.log(num1)

//Spread operator with Object
const obj1={name:"Pavan"} 
const obj2={age:"26"} 
const resultObj={...obj1,...obj2}
console.log(resultObj)

// ... , ===
// Join 
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);

let selectorParts = ["div", "login", "button"];

let selector = selectorParts.join("-");

console.log(selector);