// Basic Async/Await

async function getTestResult () {
  return 'Pass'
}

// async function ALWAYS returns a Promise
getTestResult().then(function (result) {
  console.log(result)
})

async function runTest () {
  let result = await Promise.resolve('Login test passed')
  console.log(result)

  let result2 = await Promise.resolve('Dashboard test passed')
  console.log(result2)
}

runTest()
