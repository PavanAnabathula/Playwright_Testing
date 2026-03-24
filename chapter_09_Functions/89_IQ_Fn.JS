function getStatus (code) {
  if (code >= 200 && code <= 300) return 'success'
  else if (code >= 400 && code <= 500) return 'client Errors'
  if (code >= 500) return 'server error'
}
console.log(getStatus(200))
console.log(getStatus(404))
console.log(getStatus(501))

function logTest (name) {
  console.log(`Running : ${name}`)
  //No return statement
}
let result = logTest('Testing')
console.log(result) //undefined

console.log(greet('Alice'));

function greet (name) {
  return `Hello, ${name}!`
}


// ❌ Expression — NOT hoisted
sayHi('Bob')
const sayHi = function (name) {
  return `Hi ${name}!`
}
