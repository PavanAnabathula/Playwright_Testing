/*A function expression in JavaScript means defining a function and storing
it inside a variable.*/

//Normal Way
function sayHello () {
  console.log('Hello')
}

//Function with Expression

const greet = function () {
  return `Hello --> Function  with Expression`
}

console.log(greet());
