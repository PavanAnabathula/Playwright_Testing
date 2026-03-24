/*Immediately Invoked Function Expressions (IIFE) are functions in JavaScript 
that run immediately after they are defined.
They don't need to be called.*/

function name1 () {
  console.log('Hi')
}

name1()

//IIFE
;(function () {
  console.log('This runs Immediately')
})()

//IIFE Arrow Function

;(() => {
  console.log('IIFE Arrow Function')
})()

//IIFE with Arguments
;(function (name) {
  console.log('IIFE with Arguments ' + name)
})('Pavan');
