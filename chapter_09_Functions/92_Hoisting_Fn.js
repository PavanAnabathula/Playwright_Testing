// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.

console.log(greet("Alice")); // ✅ Declaration — hoisted, works before definition


function greet(name) {
    return `Hello, ${name}!`;
}


sayHi("Bob"); // ❌ TypeError: sayHi is not a function--Cannot access 'sayHi' before initialization

const sayHi = function (name) {
    return `Hi, ${name}!`;
};