//Check Positive,negative or Zero
let num = -5

if (num > 0) {
  console.log('Positive')
} else if (num < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}

//Check Voting Eligibility

let age = 18

if (age >= 18) {
  console.log('Eligible to vote')
} else {
  console.log('Not eligible to vote')
}

let user = "admin"
let password = '12234'

if (user == 'admin') {
  if (password === '1234') {
    console.log('Login Successfull')
  } else {
    console.log('Wrong Password')
  }
} else {
  console.log('Invalid User')
}
