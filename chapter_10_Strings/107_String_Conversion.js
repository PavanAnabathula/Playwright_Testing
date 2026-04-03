// String Conversion


// To string
console.log((200).toString()); // "200"
true.toString();  // "true"


Number("42");  //  42

console.log(parseInt("42pxk"));  // 42
parseFloat("3.14rem"); //3.14


let str = "hello"; //. Strings are immutable in nature like in  Java. 
str[0] = "H";
str[1] = "I";
console.log(str);
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper); 

/*Strings are immutable in JavaScript
Methods don’t change original string, they return a new one
Example:*/

let x = "Test";
x.toUpperCase();
console.log(x); // still "hello"