//Arrow functions are a shorter (modern) way to write function expressions
// in JavaScript, introduced in ES6.

//Normal Function
const greet = function (name1) {
  return 'Hello ' + name1
}

/*If you want to make a normal function to arrow function.
Remove the keyword function, remove the keyword return,
 remove the curly braces, and use the =>*/

const greet1 = name2 => `Hello ${name2}`
console.log(greet('I am Normal Function'))
console.log(greet1('I am Arrow Function'))

// arrow functions only generally works whenever you have a single line.
const doubleIt = n => n * 2
console.log(doubleIt(10))

//No Parameters and parens () required
const getEnv = () => 'Staging'
console.log(getEnv())

// Suppose we have a multi-line. Can we use arrow function everywhere?
// Multi-line — needs curly braces + return

const getResult = score => {
  if (score >= 75) return 'Pass'
  return 'Fail'
}
console.log(getResult(75))

const add = (a, b) => {
  return a + b
}
console.log(add(10, 2))

const getUser = () => ({ name: 'Pavan', age: 22 })

console.log(getUser())

//Function Hoisted Example
console.log(hello())

function hello () {
  return 'Hello Function Hoisted'
}

//Arrow function Cannot be Hoisted
sayHello(); //ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = () => 'Hi';
