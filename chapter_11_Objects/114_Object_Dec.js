const user = { name1: 'john', age: 30, city: 'NYC' }

//Basic Destructuring

const { name1, age } = user
console.log(name1)
console.log(age)

//Rename Variables

const { name1: userName, age: userAge } = user
console.log(userName)
console.log(userAge)

//Default Values
const { country = 'USA' } = user
console.log(country) //USA

const data = { user: { name: 'John', address: { city: 'NYC' } } }
const {
  user: {
    address: { city }
  }
} = data

