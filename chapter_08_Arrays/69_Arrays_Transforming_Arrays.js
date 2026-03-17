let scores=[45, 82, 91, 60, 73];

//Map transforms every element and returns the new Array

let grades=scores.map(s=>s>70?"Pass":"Fail");
console.log(grades);//[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]

//filter - Returns the elements of an array that meet the condition specified in a callback function.

let passing=scores.filter(s=>s>=70);
console.log(`The Scores for Pass is : ${passing}`);//The Scores for Pass is : 82,91,73

//reduce()- reduces an array to a single value by repeatedly applying a function.
let total=scores.reduce((sum,s)=>sum+s,0);
console.log(total)//351

// flat — Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());//[ 1, 2, 3, 4, 5 ]