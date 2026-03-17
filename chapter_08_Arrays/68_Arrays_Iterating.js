//Iterate means go from one to another
let tests = ['login', 'checkout', 'search']

for (i = 0; i < tests.length; i++) {
  console.log(tests[i])
}

console.log('--------------for....of Loops----------------')

//for .... of Loops

for (let test of tests) {
  console.log(test) //Values
}

console.log('--------------forEach Start----------------')

//forEach loop(no return Value)

tests.forEach((test,index)=>{
    console.log(`Values and Index are - ${index} :${test}`);
});

console.log('----entries() Returns an iterable of key, value pairs for every entry in the array--')

for(let[i,test] of tests.entries()){
    console.log(i,test);
}


console.log('----------------------');

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}