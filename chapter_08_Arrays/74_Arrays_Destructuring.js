// let [first,second,third]=[10,20,30];
// console.log(first)
// console.log(second)
// console.log(third)

let [first, second, ...third] = [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(first)//10
console.log(second)//20
console.log(third)//[ 30, 40, 50, 60,70, 80, 90]


let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);//20
console.log(b);//10