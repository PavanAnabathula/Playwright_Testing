const user = {
  name: 'john',
  age: 30,
  email: 'john@example.com'
}

console.log(user)

//Accessing Properties
console.log(user.name)
console.log(user['age'])

//Dynamic Access Property
const key = 'name'
console.log(user[key])

//Adding and Modifying the Data
user.city = 'Nyc'
user.age = '31'

console.log(user)
