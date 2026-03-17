// let class = "Hello World";

/*class is a reserved keyword in JavaScript, so it cannot be used as an identifier.
This will result in a SyntaxError.*/


// let if = true;

//if is also a reserved keyword in JavaScript, so it cannot be used as an identifier.
//  This will also result in a syntax error.

// let return = 5;
//return is also a reserved keyword in JavaScript, so it cannot be used as an identifier. 
// This will also result in a syntax error.

let myVariable = 10;
// This is a valid identifier and can be used without any issues.

//  they look like keywords but aren't reserved)
// let undefined = 5;  // ⚠️ Works but NEVER do this!
// let Infinity = 10; // ⚠️ Works but NEVER do this!

// Valid Identifier Examples
let name = "Automation";        // letters
let _age = 25;               // underscore
let $salary = 50000;         // dollar sign
let user1 = "John";          // letters + number
let first_name = "Amul";     // underscore in the middle

// Invalid Identifier Examples (will cause errors)
// let 1stName = "John";        // starts with a number ❌
// let first-name = "Amul";     // hyphen not allowed ❌
// let let = 10;                // reserved keyword ❌