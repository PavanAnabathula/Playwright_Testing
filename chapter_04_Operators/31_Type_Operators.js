console.log(typeof "hello");      // "string"
console.log(typeof 123);          // "number" (integers are numbers)
console.log(typeof 31.4);         // "number" (floats are also numbers)
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a JS quirk)
console.log(typeof []);           // "object" (arrays are objects)
console.log(typeof {});           // "object" (plain object)
console.log(typeof function(){}); // "function"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof NaN);        // "number" (yes, NaN is a number!)
console.log(typeof Infinity);   // "number"
console.log(typeof "123");      // "string"
console.log(`${typeof "123"}-${typeof 123}`); // "string-number"

/*
null is technically not an object, but JS returns "object" due to legacy reasons.
Arrays are objects, but Array.isArray([]) can check specifically for arrays.*/