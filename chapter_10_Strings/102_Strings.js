//Strngs

let url = 'https://app.vwo.com'
let status1 = 'pass'
let message = `Test Message returned as ${status1}` //templete literal

//single quote

let a = 'hello'

//Double Quote
let b = 'World'

//Template Literals(backticks) — allows expressions & multiline
let name1 = 'test'
let msg = `Hello ${name1}! 2 + 2 = ${2 + 2}`
console.log(msg)

//Multiple
let report = `
Test: Login
Status: Pass
Duration : 320ms
`
console.log(report)

// String() constructor (converts other types)
console.log(String(200))
console.log(String(true)) //"true"
console.log(String(null)) //"null"
console.log(String([1,2]))//"1,2"

