// let arr = [1, 2, 3];
// let copy = arr;
// copy.push(4);
// console.log(arr.length);//4
// console.log(copy);//[ 1, 2, 3, 4 ]

// 1️⃣ Array Creation & Access
// Task 1: Create an array of numbers [1,2,3,4,5] and log the first and last element.
let num = [1, 2, 3, 4, 5, 6, 7]
console.log(num[0])
console.log(num[num.length - 1])

// Task 2: Create an empty array and add 3 elements using push() and unshift().
let emptyarr = []
emptyarr.push(10, 20, 30)
console.log(emptyarr)
emptyarr.unshift(0)
console.log(emptyarr) //added 0 at beginning

// 2️⃣ Array Methods – Adding & Removing
// Task: Add 2 elements at the start and remove 1 from the end.
let add = []
add.unshift(10, 20)
console.log(add)
add.pop()
console.log(add)

// 3️⃣ Array Concatenation

// Task: Merge [1,2] and [3,4] into a single array using:

let a = [1, 2]
let b = [3, 4]
let c = a.concat(b)
console.log(c) //[ 1, 2, 3, 4 ]
let d = [...a, ...b]
console.log(d) //[ 1, 2, 3, 4 ]


// 4️⃣ Array Slicing & Splicing
// Task: Remove 2 elements from index 1 and insert 99, 100 using splice.

let slicetask=[10,20,30,40,50]
let resultslice=slicetask.slice(1,3);
console.log(resultslice) ;//[ 20, 30 ]

// array.splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30, 40, 50];
console.log(arr.splice(1,2));//Removed 2 elements from 1 index
console.log(arr);
console.log(arr.splice(2,0,99,100,101))//Insert 99,100,101 at index 2 without deleting
console.log(arr);
console.log(arr.splice(1,1,105))//Replace element at index 1 with 105
console.log(arr);//[ 10, 105, 99, 100, 101, 50 ]

// Remove Duplicates
let array=[1,2,2,3,3,4];
console.log([...new Set(array)]);