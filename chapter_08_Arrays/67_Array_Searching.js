//Searching of Arrays Conncepts

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index if match, or -1 if not found

results.indexOf("fail");
console.log(results.indexOf("fail"));//1

results.indexOf("skip");
console.log(results.indexOf("skip"));//-1 if not found

//lastIndexOf — Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.


results.lastIndexOf("error");
console.log(results.lastIndexOf("error"));//3 checks from the last 

results.lastIndexOf("skip");
console.log(results.lastIndexOf("skip"));//-1 if not found


// includes —Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(results.includes("error"));// true
console.log(results.includes("skip"));// false


//find — Returns the value of the first element in the array where predicate is true, and undefined otherwise.

let nums = [10, 25, 30, 45];

let firstele=nums.find(x => x > 20);  // 25,30,45 -> A -25

console.log(firstele);//25

let ele=nums.find(x => x > 60);  // 25,30,45 -> undefined

console.log(ele);//undefined--if the element is not found  

// findIndex-Returns the index of the first element in the array where predicate is true, and -1 otherwise.

nums.findIndex(n => n > 25);
console.log(nums.findIndex(n => n > 25));//2 index --30 value[10, 25, 30, 45];


// findLast-Returns the value of the last element in the array where predicate is true, and undefined otherwise.

nums.findLast(n => n > 20); 
console.log(nums.findLast(n => n >25));//45--[10, 25, 30, 45];

nums.findLast(n => n > 65); 
console.log(nums.findLast(n => n >65));//undefined


// findLastIndex-Returns the index of the last element in the array where predicate is true, and -1 otherwise.



nums.findLastIndex(n => n > 20); 
console.log(nums.findLastIndex(n => n >25));//3 last index 45


nums.findLastIndex(n => n > 65); 
console.log(nums.findLastIndex(n => n >65));//-1 if not found
