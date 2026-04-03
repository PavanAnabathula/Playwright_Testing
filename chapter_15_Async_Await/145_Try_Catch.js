/*Error Handling Try Catch  
with promise use catch()
with async and await you use try/catch -— exactly like regular JavaScript error handling.*/

async function testAPI () {
  try {
    let result = await Promise.reject('503 Service Unavailable')
    console.log('Result is :', result)
  } catch (error) {
    console.log('Error is :', error)
  } finally {
    console.log('Clean up!!')
  }
}

testAPI()


// try/catch/finally maps directly to .then()/.catch()/.finally() — same logic, cleaner syntax.