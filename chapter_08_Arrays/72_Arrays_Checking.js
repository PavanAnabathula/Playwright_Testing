//Check is something is Array or not

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// every() returns true only if all elements satisfy the condition.
let num=[10,15,20,25,30,35];
let everynum=num.every(s=>s>=10);//true
console.log(everynum);

//some() returns true if at least one element satisfies the condition
let somenum=num.some(s=>s>=25);//true
console.log(somenum);

let users = [
  {name: "Ram", active: true},
  {name: "Sam", active: false},
  {name: "John", active: true}
];

let hasActive=users.every(user=>user.active===true);
console.log(hasActive);//false

let hasInactive = users.some(user => user.active === false);

console.log(hasInactive);//true