/*Scope defines where variables are accessible in your code.
Variables declared inside a function are only accessible 
inside that function, not outside.*/

let env="staging";  //Global Scope

function setConfig(){
    let timeout=3000;//local scope
    console.log(env)// ✅ can access global
     console.log(timeout)// ✅ can access local
}

setConfig();
console.log(env)
// console.log(timeout)// ❌ ReferenceError — not accessible outside

let g_x=10;

// 🔁 3. Nested Function Scope (Lexical Scope)\ blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(y);
        console.log(x);  // ✅ inner can access outer's variables
    }


    inner();
    // console.log(y); // ❌ outer cannot access inner's variables

}

outer();


/*Scope Chain
If a variable is not found in the current scope, JS looks upward:*/

let a = 10;

function one() {
  function two() {
    console.log(a); // ✅ found in global
  }
  two();
}


// var vs let vs const (Important)
// var → function scoped
example1();
function example1() {
  if (true) {
    var x = 10;
  }
  console.log(x+" var"); // ✅ works
}


// let & const → block scoped
function example() {
  if (true) {
    let y = 20;
  }
  console.log(y); // y is not defined❌ Error
}
// example();

// Shadowing--Inner variable can override outer variable:

let value=10;

function shadow(){
    
       let  value=20;
    console.log(value+" shadow")
}
shadow();