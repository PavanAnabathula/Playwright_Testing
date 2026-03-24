function sumOfTwo (a, b) {
  return a + b
}

let sum = sumOfTwo(10, 5)
console.log(sum) //15

function greet (name) {
  return 'Hello ' + name
}
console.log(greet('Pavan'))

function even (num) {
  return num % 2 === 0
}
console.log(even(10)) // true
console.log(even(7)) // false

function grade (score) {
  if (score >= 90) return 'A-Grade'
  else if (score >= 75) return 'B-Grade'
  else if (score >= 50) return 'C-Grade'
  else return 'Fail'
}

console.log(grade(85))
console.log(grade(95))
