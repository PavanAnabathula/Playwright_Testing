//Real Example with API

let response_code = 4010

switch (response_code) {
  case 200:
    console.log('API Returned Successful Code : 200')
    break
  case 401:
    console.log('API Returned Unauthorized Code : 401')
    break
  case 500:
    console.log('API Returned Internal Service Error Code : 500')
    break
  default:
    console.log('Received Wrong Error Code')
}
