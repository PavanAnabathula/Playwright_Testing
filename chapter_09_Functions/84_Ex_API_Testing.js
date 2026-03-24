// if (ourStatusCode >= 200 && ourStatusCode <= 300)
function validateStatusCode (statuscode) {
  if (statuscode >= 200 && statuscode <= 300) {
    console.log('Request is Fine')
  }
}
validateStatusCode(201)

const validateStatusCodeExp = function (status) {
  if (status >= 200 && status <= 300) {
    console.log('Request is Fine--from Function Expression')
  }
}
validateStatusCodeExp(200)

const validateStatusCode_Arrow = statusCode => {
  if (statusCode >= 200 && statusCode <= 300) {
    console.log('Request is Fine--from Arrow Function')
  }
}
validateStatusCode_Arrow(200)


