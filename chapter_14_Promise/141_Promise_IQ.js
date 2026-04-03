/*let p = new Promise(function (resolve, reject) {
  resolve(42)
})

p.then(function (value) {
  console.log(value)
}) //42

let p1 = new Promise(function (resolve, reject) {
  reject('Something broke')
})

p1.catch(function (value) {
  console.log('Caught:', value)
}) //Something broke*/

let p2 = Promise.resolve(5)
p2.then(function (val) {
  return val * 10
}).then(function (val) {
  console.log('p3 Value is :', val)
})

let p3 = Promise.resolve(1)

p3.then(function (val1) {
  console.log(val1)
  return val1 + 1
})
  .then(function (val1) {
    console.log(val1)
    return val1 + 1
  })
  .then(function (val1) {
    console.log(val1)
    return val1 + 1
  })

Promise.resolve('start')
  .then(function (val) {
    console.log(val)
    throw new Error('Broken at step 2')
  })
  .then(function (val) {
    console.log('This will NOT run')
  })
  .catch(function (err) {
    console.log('Caught:', err.message)
  })

Promise.reject('Test Failed')
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log('Error', err)
  })
  .finally(function () {
    console.log('Cleanup done')
  })

Promise.resolve('Quick win').then(function (msg) {
  console.log(msg)
})

Promise.reject('Quick Loss')
  .then(function (val) {
    console.log('Resolve : ', val)
  })
  .catch(function (val) {
    console.log('Rejected ', val)
  })

let t1 = Promise.resolve('Login : PASS')
let t2 = Promise.resolve('search : PASS')
let t3 = Promise.resolve('Logout : PASS')

Promise.all([t1, t2, t3]).then(function (results) {
  console.log(results)
})

let t4 = Promise.resolve('Login : PASS')
let t5 = Promise.reject('search : FAIL')
let t6 = Promise.resolve('Logout : PASS')

Promise.all([t4, t5, t6])
  .then(function (results) {
    console.log('All Passed', results)
  })
  .catch(function (r) {
    console.log('Failed', r)
  })

Promise.allSettled([
  Promise.resolve('API 200'),
  Promise.reject('API 500'),
  Promise.resolve('API 201')
]).then(function (results) {
  results.forEach(function (r) {
    let val = r.status === 'fulfilled' ? r.value : r.reason
    console.log(r.status + ' ->' + val)
  })
})
