function doingwork (worker, callback) {
  console.log('Started doing work')
  let work = worker

  console.log('FInished the work')
  callback()
}

function callWork () {
  console.log('Calling the callback function work')
}
doingwork('PW Class Work', callWork)

function pramod_doing_work (worker, callback) {
  console.log('Started the class PW')
  let work = worker

  // dasdasdasdsadasdsadas
  console.log('Finished the class PW')
  callback()
}

function callWife () {
  console.log('Call wife when done')
}

pramod_doing_work('PW class', callWife)
