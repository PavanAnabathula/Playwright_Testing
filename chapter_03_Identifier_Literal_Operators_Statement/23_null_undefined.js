console.log(null === undefined); // (strict — different types)
console.log(null == undefined);

console.log(null == 0);
console.log(null == "");
console.log(undefined == 0);
console.log(undefined == "");

// ==========================
// Nullish Coalescing Operator (??)
// ==========================
let userInput = null;
let finalInput = userInput ?? "Default Value";
console.log("finalInput:", finalInput);  // "Default Value"

let userInput2;  // undefined
let finalInput2 = userInput2 ?? "Default Value";
console.log("finalInput2:", finalInput2); // "Default Value"

console.log("5 + null =", 5 + 1);          // 5 (null converts to 0)5 + null = 5
console.log( 5+1,"5 + null =");//6 5 + null =