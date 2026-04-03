/*A closure is when a function “remembers” variables from its outer (parent) scope, 
even after that outer function has finished executing.*/

function outer(){
    let message="Hello";
    console.log("Outer Called");

    function inner(){
        console.log(message);
    }
    return inner;
}


let fn_inner=outer();
fn_inner();

//  inner() not allowed!