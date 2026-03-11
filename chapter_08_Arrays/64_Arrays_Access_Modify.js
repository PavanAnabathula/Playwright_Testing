//Arrays Accessing

let sports=["cricket","football","tennis","kabaddi"];
console.log(sports[0]);
console.log(sports[2]);

console.log(sports.at(-1));//at(-1)it will fetch last element in an array
console.log(sports.at(-2));//at(-3)it will fetch second element in an array from last
console.log(sports.at(-3));//at(-3)it will fetch third element in an array from last
console.log(sports.at(-4));//at(-3)it will fetch fourth element in an array from last
console.log(sports.at(-5));//undefined

//Modifying Arrays
sports[1]="volleyball"
console.log(sports);

console.log(sports.length);
