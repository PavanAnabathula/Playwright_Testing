/*Exercise 3 — Deep vs Shallow Copy (Tricky)
What is the output and why? How would you fix it?

Here Shallow Copy duplicates only the first level of the object or array.
and Nested objects or arrays still reference the same memory.*/

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);

/*2. Deep Copy:
A deep copy duplicates all levels of an object or array.
Nested objects or arrays are fully cloned, so no references are shared.*/
let suite3 = [{ name: "login", status: "pass" }];

let suite4 = structuredClone(suite3);
suite4[0].status = "fail";
console.log(suite3[0].status);  // "pass" — safe
