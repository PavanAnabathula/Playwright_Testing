Promise.allSettled([
  Promise.resolve('A Test Passed'),
  Promise.reject('Test B Failed'),
  Promise.resolve('Test C passed')
]).then(function (result) {
  result.forEach(function (r, i) {
    console.log('Test ' + (i + 1) + ':', r.status, '-', r.value || r.reason)
  })
})

// This is like a test report — you want results for ALL tests, not just stop at the first failure.
