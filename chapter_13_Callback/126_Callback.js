//Callback

function placeOrder (item, callback) {
  console.log('Placing the order')
  callback() //function call
}

//Define
function print () {
  console.log('Normal Fn - Done with the order')
}

// First Way
// placeOrder("Burger", print);

// Sencond Way Anoy
// placeOrder("Burger", function () {
//     console.log("Anoy Fn, I am also a function wihtout name!")
// });

//Third Way
placeOrder('Burger', () => {
  console.log('Arrow Fn, I am also a function wihtout name!')
})

// test('has title', async ({ page }) => {})
function test1 (text, callback) {
  console.log('Hi, this is test')
  callback()
}

test1('Verify that the login page is working', async page => {
  console.log('Running TC1')
})

// test('has title', async ({ page }) => {})

