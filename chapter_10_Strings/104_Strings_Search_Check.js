//Searching and Checking

let url = 'https://staging.vwo.com/api/login?retry=true'

//Includes
console.log(url.includes('staging')) //true
console.log(url.includes('production')) //false

// startsWith / endsWith
console.log(url.startsWith('https')) //true
console.log(url.startsWith('http://')) //fasle
console.log(url.endsWith('true')) //true

//// indexOf / lastIndexOf
console.log(url.indexOf('a')) //first matching Index
console.log(url.lastIndexOf('a')) //last matching Index starting from 0 index
console.log(url.indexOf('another'))

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex.
console.log(url.search(/login/)) // regex
console.log(url.search(/\d+/));//-1 if not exists
console.log(url.search(/\a+/));//index if exists

