function runTest (name, status, duration) {
  return `${name}: ${status} (${duration}ms)`
}

// Arguments
console.log(runTest('Login', 'pass', 320))
// "Login: pass (320ms)"

function test () {
  return 'Hello'
  console.log('World')
}
console.log(test()) //Code after return statements never executes

// Pass Function as Argument
function operation (a, b, fn) {
  return fn(a, b)
}

function add (x, y) {
  return x + y
}

console.log(operation(3, 4, add))

(function(a){
    console.log(a);
})(5);//5
