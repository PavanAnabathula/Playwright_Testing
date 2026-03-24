console.log('Hello')

function add (a, b, c) {
  return a + b + c
}
let result
for (let i = 0; i < 100; i++) {
  result = add(i, i + 1, i * i)
}
console.log('After 100 calls:', result)
