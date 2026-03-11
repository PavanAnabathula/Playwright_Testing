/*Exercise 2 — Spot the Bug
What is wrong with this code? Fix it.
Explanation:
The Issue is How Sort is being Used Here
ex: It will Sort based on lexicographically so it converts to string and store the values*/ 


//Modification
let responseTimes = [320, 85,70, 1200, 450, 99];
let sorted = responseTimes.sort((a,b)=>a-b);
console.log("Fastest:", sorted[0]);

