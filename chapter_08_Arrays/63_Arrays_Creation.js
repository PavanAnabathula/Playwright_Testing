//Array
let fruits=[]; //empty Array
let Vegetable=["cucumber","potato","tomato"];
//index will start from - 0,1,2,3...  
console.log(Vegetable)

let array=[0,1,2,3]
console.log(array.length);//0-3 : 4
// console.log(arr.length()); length is property , () -> function
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);//undefined 

let test_result=["pass","fail","absent"];

let mixed=[1,20,"test",true,null]; //Arrays are can hold any of type --> Heterogeneous

//Array literal Preferred

let browsers=["chrome","edge","safari"];

//Array Constructor

let score= new Array(3);//create an empty * 3

let scores=new Array(1,2,3);// creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test=Array.of(10,20,30,40);
console.log(test);
console.log(test[0]);

//Arrays from()

let chars=Array.from("Hello");
console.log(chars);//[ 'H', 'e', 'l', 'l', 'o' ]



