/* Sorting:
Function used to determine the order of the elements. 
It is expected to return a negative value if the first argument is less than the 
second argument, zero if they're equal, and a positive value otherwise.
 If omitted, the elements are sorted in ascending, UTF-16 code unit order.
[11,2,22,1].sort((a, b) => a - b)
Sorts an array in place. This method mutates the array and 
returns a reference to the same array.*/

let fruits=["banana","apple","cherry","kiwi"];
fruits.sort();
console.log(fruits);//alphabetical by default

let num=[10,1,15,20,21,2];
num.sort();
console.log(num);//[ 1, 10, 15, 2, 20, 21 ]← WRONG (compares as strings!)

num.sort((a,b)=>a-b);
console.log(num);//// Ascending[ 1, 2, 10, 15, 20, 21 ]


num.sort((a,b)=>b-a);
console.log(num);//// descending [ 21, 20, 15, 10, 2, 1 ]

