let original = [1, 2, 3]

let copy1 = [...original]
console.log(copy1)

let copy2 = original.slice(0)
console.log(copy2)

let copy3 = Array.from(original)
console.log(copy3)

let copy4 = original.concat()
console.log(copy4)

copy1.push(99)
console.log(original)
console.log(copy1) //Spread copy helps maintain immutability.

//reference Copy
let c = original //Deep Copy
c.push(99)
console.log(original)
console.log(c) //Deep copy helps maintain mutability.

// Correct Deep Copy Using JSON

let deepcopy = JSON.parse(JSON.stringify(original))

deepcopy.push(100)

console.log(original)//[ 1, 2, 3, 99 ]
console.log(deepcopy)//[ 1, 2, 3, 99, 100 ]
