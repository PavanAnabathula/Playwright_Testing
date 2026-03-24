//Type 2 FUnctions

//So with Arguments/Parameter but no return type.

function greetbyname(name){
    console.log(`Hello `+name)
}
greetbyname("Pavan");//Arguments
greetbyname("Anabathula");//Arguments

function  begger(money){
    console.log("Thanks for the Money : "+money);
}

begger("100");
begger(20);

let rtnsomething=begger("50");
console.log(rtnsomething);//undefined

let rtnName= greetbyname("jonsnow")
console.log(rtnName);//undefined
