// String Properties & Basic Access

let str = 'Hello, World!' //length start from 1
console.log(str.length)

//Access by Index
console.log(str[0])
console.log(str[10])
console.log(str.at(-1))
console.log(str.at(-9))

// charAt()
console.log(str.charAt(0)) // "H"
// charCodeAt() — Unicode value
console.log(str.charCodeAt(0)) // 72

// 🔹 2. Length Property
let text = 'JavaScript'
console.log('Length:', text.length)
// 🔹 3. Access Characters
console.log('First char:', text[0])
console.log('Last char:', text[text.length - 1])
// 🔹 4. toUpperCase() & toLowerCase()
console.log(text.toUpperCase());
console.log(text.toLowerCase());

