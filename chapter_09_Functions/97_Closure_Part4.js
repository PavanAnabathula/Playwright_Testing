// Write a function makeRateLimiter(limit) that returns a function.
// Each call to the returned function should track usage and return true if under limit
// , false when limit is exceeded.

function makeRateLimiter (limit) {
  let usage = 0

  function check () {
    usage++

    return usage <= limit
  }
  return check
}

let call=makeRateLimiter(3);
console.log(call())
console.log(call())
console.log(call())
console.log(call())