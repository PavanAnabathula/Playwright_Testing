let score = 5

switch (score) {
  case '5':
    console.log("String '5' Matched")
    break

  case 5:
    console.log("Number 5 Matched")
    break

  default:
    console.log('Invalid type of object')
}
// Output: "String '5' matched"
// switch uses ===, so "5" !== 5 (different types)