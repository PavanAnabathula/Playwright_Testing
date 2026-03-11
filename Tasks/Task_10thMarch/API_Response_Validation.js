/*Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes*/

let responses = [200,201,401,404, 500, 404, 200, 503];

// 1.Check if ALL responses are successful (200–299)

let SuccessfulResponses =responses.every(n=>n>=200 && n<=299);
console.log(SuccessfulResponses);

// 2.Find the FIRST non-success code

let nonSuccessResponse=responses.find(code => code >=400);
console.log(nonSuccessResponse);

//3.Return all unique error codes

let uniqueCodes=[...new Set(responses.filter(n=>n>=400))];
console.log(uniqueCodes);
