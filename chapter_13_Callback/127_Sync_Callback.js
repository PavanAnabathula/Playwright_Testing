let testResults = ['PASS', 'FAIL', 'PASS', 'SKIP']

testResults.forEach(function (result, index) {
  console.log('Test ' + index + ' -> ' + result)
})

// "All done" prints LAST because forEach is synchronous
// — it finishes all 4 iterations first, then moves on.

//count 
let counts = testResults.reduce((acc, result) => {
  acc[result] = (acc[result] || 0) + 1;
  return acc;
  
}, {});

console.log(counts);