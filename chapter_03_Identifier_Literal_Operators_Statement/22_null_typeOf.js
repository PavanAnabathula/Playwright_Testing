// Null — "intentionally nothing"

let selectedItem = null;
let searchResult = null;

console.log(searchResult);

let declaredOnly;          // declared but not initialized
console.log(declaredOnly); // undefined

let anotherVar = undefined;
console.log(anotherVar);   // undefined

// Equality comparisons
console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality)