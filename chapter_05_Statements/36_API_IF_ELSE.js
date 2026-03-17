let statuscode = 200

if (statuscode == '200') {
  console.log('API returned 200-OK ')
} else if (statuscode == '404') {
  console.log('API returned 404 Bad request')
} else {
  console.log('Wrong Error code returned')
}
