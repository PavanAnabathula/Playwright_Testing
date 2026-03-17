/*Nullish Coalescing Operator (??) in JavaScript — very useful for handling null or undefined
 values without accidentally catching falsy values like 0 or "" */

//If value is null its returns the right side value
let amul = null
let val = amul ?? 'nandani milk' // amul is null, so right side is returned
console.log(val) // Output: "nandani milk"

//If value is not null its returns the actual  value
let toned = 'Amul Toned'
let milk = toned ?? 'nandani milk'
console.log(milk) // Output: "Amul Toned"

// Important: ?? only triggers when the left side is null or undefined.
//Multiple Nullish
let a = null
let b = undefined
let c = 'Hello'

let result = a ?? b ?? c ?? 'Default'
console.log(result) // Output: "Hello"
